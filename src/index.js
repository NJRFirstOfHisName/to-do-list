import './style.css';
import printListItem from "./printListItem";
import ListItem from "./addListItem";
import addProject from './addProject';

// Dom elements used for and in event listeners
const container = document.getElementById('container');
const tdList = document.getElementById('tdList');
const completedList = document.getElementById('completedList');
const project = document.getElementById('projects');

//Hard-coded entries to simplify testing, will be deleted once project is finished
    const defaultList = new ListItem("Default Item","This is a default item for defaulting","07-02-2023",false, "defaultProject");
    const defaultList2 = new ListItem("Default Item","This is a default item for defaulting","07-02-2023",false, "defaultProject");
    const defaultList3 = new ListItem("Default Item","This is a default item for defaulting","07-02-2023",false, "defaultProject");
    const defaultList4 = new ListItem("Default Item","This is a default item for defaulting","07-02-2023",false, "defaultProject");
    const defaultCompleted = new ListItem("Default completed Item","This is a completed default item for completed defaulting","01-012-2001",true, "defaultProject");
    const testList = new ListItem("Test Item","This is a test item for testing","09-11-2050", false, "testProject");
    const testCompleted = new ListItem("Test completed Item","This is a completed test item for completed testing","11-11-1111", true, "testProject")

    defaultCompleted.completed = true;
    testCompleted.completed = true;

    let fullList = [defaultList, testList, defaultCompleted, testCompleted, defaultList2, defaultList3, defaultList4];

//Prints contents of default project on page load
fullList.forEach(ListItem => {
    if(ListItem.getProject === project.value){
        printListItem(ListItem);
    }
})

//Prints contents of selected project when selection is changed
project.addEventListener('change', () => {
    tdList.innerHTML = "";
    completedList.innerHTML = "";
    fullList.forEach(ListItem => {
        if(ListItem.getProject === project.value){
            printListItem(ListItem);
        }
    })
})

//Creates new project when 'New Project' button is pressed
const newProjectBtn = document.getElementById('newProject');
newProjectBtn.addEventListener('click', () => {
    addProject(project);
})

//Creates a new, uncompleted task when 'Add' button is pressed IF title is present
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    if(document.getElementById('titleInput').value) {
        const newListItem = new ListItem(
            document.getElementById('titleInput').value,
            document.getElementById('descriptionForm').value,
            document.getElementById('dueDate').value,
            document.getElementById('priority').checked,
            project.value);
        printListItem(newListItem);
        fullList.push(newListItem);
    }
})

//Listens for any clicks within the tasks container.
container.addEventListener('click', (element) => {
    const parent = element.target.parentNode;
    //If delete button is clicked, deletes task.
    if(element.target.classList.contains('delete')) {
        fullList = fullList.filter(task => task.getTaskID != parent.id);
        parent.remove();
    }
    //If checkbox is clicked, toggles 'completed' and moves task from 'tasks' to 'completed' or vice-versa
    if(element.target.classList.contains('check')) {
        let toggleIndex = fullList.map(e => e.getTaskID).indexOf(parent.id);
        fullList[toggleIndex].completed = !fullList[toggleIndex].getCompleted;
        printListItem(fullList[toggleIndex])
        parent.remove();
    }
})