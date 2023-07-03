import './style.css';
import printListItem from "./printListItem";
import deleteEntry from "./deleteEntry";
import ListItem from "./addListItem";

// Dom elements used for and in event listeners
const container = document.getElementById('container');
const tdList = document.getElementById('tdList');
const completedList = document.getElementById('completedList');
const project = document.getElementById('projects');

//Hard-coded entries to simplify testing, will be deleted once project is finished
    const defaultList = new ListItem("Default Item","This is a default item for defaulting","07-02-2023",false, "defaultProject");
    const defaultCompleted = new ListItem("Default completed Item","This is a completed default item for completed defaulting","01-012-2001",true, "defaultProject");
    const testList = new ListItem("Test Item","This is a test item for testing","09-11-2050", false, "testProject");
    const testCompleted = new ListItem("Test completed Item","This is a completed test item for completed testing","11-11-1111", true, "testProject")

    defaultCompleted.completed = true;
    testCompleted.completed = true;

    const fullList = [defaultList, testList, defaultCompleted, testCompleted];

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

//Creates a new, uncompleted task when 'Add' button is pressed IF title is present
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    if(title) {
        const description = document.getElementById('description').value;
        const date = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').checked;
        const newListItem = new ListItem(title, description, date, priority, project);
        printListItem(newListItem);
        defaultProject.push(newListItem);
    }
})

//Listens for any clicks within the tasks container.
container.addEventListener('click', (e) => {
    //If delete button is clicked, deletes task.
    if(e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }
    //If checkbox is clicked, moves task from 'tasks' to 'completed' or vice-versa
    if(e.target.classList.contains('check')) {
        const labelChange = e.target.nextElementSibling;
        if(e.target.checked) {
            labelChange.style.setProperty("text-decoration", "line-through");
            completedList.appendChild(e.target.parentNode);
        } else {
            labelChange.style.setProperty("text-decoration", "");
            tdList.appendChild(e.target.parentNode);
        }
    }
})