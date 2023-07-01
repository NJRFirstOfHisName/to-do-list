export default function addListItem(input) {
    const newEntry = document.createElement('div');
    newEntry.className = "entry";

    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.className = "check";
    newEntry.appendChild(checkbox);

    const newItem = document.createElement('label');
    newItem.innerHTML = input;
    newEntry.appendChild(newItem);


    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete";
    newEntry.appendChild(deleteBtn);

    const tdList = document.getElementById('tdList');
    tdList.appendChild(newEntry);
}