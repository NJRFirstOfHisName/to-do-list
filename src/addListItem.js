export default function addListItem(input) {
    const newEntry = document.createElement('div');
    newEntry.className = "entry";

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "check";
    newEntry.appendChild(checkbox);

    const newLabel = document.createElement('label');
    newLabel.innerHTML = input;
    newLabel.setAttribute("for", checkbox);
    newEntry.appendChild(newLabel);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete";
    newEntry.appendChild(deleteBtn);

    const tdList = document.getElementById('tdList');
    tdList.appendChild(newEntry);
}