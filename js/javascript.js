let groceryItems = [];
function addList() {
    const itemInput = document.getElementById("itemInput");
    const newItem = itemInput.value.trim();
    if (newItem !== "") {
        groceryItems.push(newItem);
        DataList();
        itemInput.value = "";
    }
}
// Main Function-----
function DataList() {
    const item_grocery = document.getElementById("item-grocery");
    item_grocery.innerHTML = "";

    for (let i = 0; i < groceryItems.length; i++) {
        const item = groceryItems[i];


        //grocery list show----------
        const listItem = document.createElement("li");
        const itemName = document.createElement("span");
        itemName.classList.add("item-name");
        itemName.textContent = item;

        // action button-------
        const actions = document.createElement("div");
        actions.classList.add("actions-btn");

        // edit button-----------
        const editBtn = document.createElement("img");
        editBtn.classList.add("edit-btn");
        editBtn.src = "icon/edit.png";
        editBtn.addEventListener("click", () => editItem(i));

        //delete button-------------
        const deleteBtn = document.createElement("img");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.src = "icon/delete.png";
        deleteBtn.addEventListener("click", () => deleteItem(i));

        // append Child -----------------
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        listItem.appendChild(itemName);
        listItem.appendChild(actions);
        item_grocery.appendChild(listItem);
    }
}
// Function to edit an item in the list
function editItem(index) {
    const itemInput = document.getElementById("itemInput");
    itemInput.value = groceryItems[index];
    const updateBtn = document.createElement("button");
    updateBtn.classList.add("update-btn");
    updateBtn.textContent = "Update";
    updateBtn.addEventListener("click", () => {
        groceryItems[index] = itemInput.value;
        DataList();
        itemInput.value = "";
    });


    // update the item--------

    const submitBtn = document.querySelector('button[onclick="addList()"]');
    submitBtn.style.display = "none";
    itemInput.parentNode.insertBefore(updateBtn, submitBtn.nextSibling);
    updateBtn.addEventListener("click", () => {
        submitBtn.style.display = "inline-block";
        updateBtn.parentNode.removeChild(updateBtn);

    });

}

// delete item function------
function deleteItem(index) {
    groceryItems.splice(index, 1);
    DataList();
}
// clear item function------
function clearList() {
    groceryItems = [];
    DataList();
}

DataList();
