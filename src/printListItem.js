export default function printListItem(ListItem) {
    const newEntry = document.createElement('div');
    newEntry.className = "entry";

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "check";
    newEntry.appendChild(checkbox);

    const newLabel = document.createElement('label');
    newLabel.innerHTML = ListItem.getTitle;
    if(ListItem.getPriority){
        newLabel.className = "priority";
    }
    newEntry.appendChild(newLabel);

    const descriptionText = document.createElement('p');
    descriptionText.innerHTML = ListItem.getDescription;
    newEntry.appendChild(descriptionText);

    const dueDate = document.createElement('p');
    dueDate.innerHTML = ListItem.getDueDate;
    newEntry.appendChild(dueDate);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete";
    newEntry.appendChild(deleteBtn);

    if(!ListItem.getCompleted){
        console.log(ListItem.getCompleted)

        const tdList = document.getElementById('tdList');
        tdList.appendChild(newEntry);
    } else {
        const completedList = document.getElementById('completedList');
        completedList.appendChild(newEntry);
    }
}