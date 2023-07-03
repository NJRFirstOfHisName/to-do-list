export default function printListItem(ListItem) {

    //Encloses all tasks in a div with a unique id and shared class
    const newEntry = document.createElement('div');
    newEntry.className = "entry";
    newEntry.id = ListItem.getTaskID;

    //Create checkbox for marking tasks as complete (or un-marking)
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "check";
    newEntry.appendChild(checkbox);

    //Create label with the task's title and highlights it if it's a priority
    const newLabel = document.createElement('label');
    newLabel.innerHTML = ListItem.getTitle;
    if(ListItem.getPriority){
        newLabel.className = "priority";
    }
    newEntry.appendChild(newLabel);

    //Add description. If no description is supplied field will be blank
    const descriptionText = document.createElement('p');
    descriptionText.innerHTML = ListItem.getDescription;
    newEntry.appendChild(descriptionText);

    //Add due date. If no date is supplied field will be blank
    const dueDate = document.createElement('p');
    dueDate.innerHTML = ListItem.getDueDate;
    newEntry.appendChild(dueDate);

    //Add button to delete task
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete";
    newEntry.appendChild(deleteBtn);

    //Adds task to appropriate div depending on whether it's marked complete
    if(!ListItem.getCompleted){
        const tdList = document.getElementById('tdList');
        tdList.appendChild(newEntry);
    } else {
        newLabel.style.setProperty("text-decoration", "line-through");
        const completedList = document.getElementById('completedList');
        completedList.appendChild(newEntry);
    }
}