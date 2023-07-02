export default function printListItem(title, description, date, priority) {
    const newEntry = document.createElement('div');
    newEntry.className = "entry";

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "check";
    newEntry.appendChild(checkbox);

    const newLabel = document.createElement('label');
    newLabel.innerHTML = title;
    if(priority){
        newLabel.className = "priority";
    }
    newEntry.appendChild(newLabel);

    const descriptionText = document.createElement('p');
    descriptionText.innerHTML = description;
    newEntry.appendChild(descriptionText);

    const dueDate = document.createElement('p');
    dueDate.innerHTML = date;
    newEntry.appendChild(dueDate);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete";
    newEntry.appendChild(deleteBtn);

    const tdList = document.getElementById('tdList');
    tdList.appendChild(newEntry);
}