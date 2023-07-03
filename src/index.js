import './style.css';
import printListItem from "./printListItem";
import deleteEntry from "./deleteEntry";
import ListItem from "./addListItem";

const container = document.getElementById('container');
const tdList = document.getElementById('tdList');
const completedList = document.getElementById('completedList');
const project = document.getElementById('projects');

const defaultList = new ListItem("Default Item","This is a default item for defaulting","07-02-2023",false, "defaultProject");
const testList = new ListItem("Test Item","This is a test item for testing","09-11-2050",true, "testProject")

const fullList = [defaultList, testList]

fullList.forEach(ListItem => {
    if(ListItem.getProject === project.value){
        printListItem(ListItem);
    }
})

project.addEventListener('change', () => {
    tdList.innerHTML = "";
    completedList.innerHTML = "";
    fullList.forEach(ListItem => {
        if(ListItem.getProject === project.value){
            printListItem(ListItem);
        }
    })
})

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

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }
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