import './style.css';
import ListItem from "./addListItem";
import printListItem from "./printListItem";
import addProject from './addProject';
import checkProjects from './checkProjects';
import printProject from './printProject';

// Dom elements used for and in event listeners
const project = document.getElementById('projects');

//Hard-coded entries to simplify testing, will be deleted once project is finished
    const defaultList = new ListItem("Default Item","This is a default item for defaulting","07-02-2023",false, "defaultProject");
    const defaultList2 = new ListItem("Also default Item","This is a default item for defaulting, but with a slightly longer string to test wrapping","07-02-2023",false, "defaultProject");
    const defaultList3 = new ListItem("Lots of default Item(s)","This is a default item for defaulting, but with an exceptionally long string so that I can test text wrapping and potentially concatenating, which I'm not entirely sure how to implement yet but which I will also have to figure out at some point.","07-02-2023",false, "defaultProject");
    const defaultList4 = new ListItem("Getting sick of these default Items","As it turns out that string wasn't quite as exceptionally long as I had hoped, but I think I'm just going to limit the number of characters in the description and call it a day.","07-02-2023",false, "defaultProject");
    const defaultCompleted = new ListItem("Default completed Item","This is a completed default item for completed defaulting","01-012-2001",true, "defaultProject");
    const testList = new ListItem("Test Item","This is a test item for testing","09-11-2050", false, "testProject");
    const testCompleted = new ListItem("Test completed Item","This is a completed test item for completed testing","11-11-1111", true, "testProject")

    defaultCompleted.completed = true;
    testCompleted.completed = true;

    let fullList = [defaultList, testList, defaultCompleted, testCompleted, defaultList2, defaultList3, defaultList4];
    console.log(fullList)

    localStorage.clear()
    fullList.forEach((ListItem) => {
        localStorage.setItem(ListItem.getTaskID, JSON.stringify(ListItem));
    })

    // Object.entries(window.localStorage).forEach(())
//Prints contents of default project on page load
printProject(fullList, project.value);

//Prints contents of selected project when selection is changed
project.addEventListener('change', () => {
    printProject(fullList, project.value);
})

//Expands or collapses the form for adding a project when button is pressed
document.getElementById('projectFormButton').addEventListener('click', () => {
    const projectAdd = document.getElementById('projectAdd');
    projectAdd.classList.toggle('expanded');
    projectAdd.classList.toggle('collapsed');
})

//Creates new project when 'New Project' button is pressed
document.getElementById('newProject').addEventListener('click', () => {
    let projectInput = document.getElementById('projectInput');
    let valid = checkProjects(projectInput, project);
    addProject(valid, projectInput);
    printProject(fullList, project.value);
})

//Creates a new, uncompleted task when 'Add' button is pressed IF title is present
document.getElementById('addBtn').addEventListener('click', () => {
    if(document.getElementById('titleInput').value) {
        const newListItem = new ListItem(
            document.getElementById('titleInput').value,
            document.getElementById('descriptionForm').value,
            document.getElementById('dueDate').value,
            document.getElementById('priority').checked,
            project.value);
        printListItem(newListItem);
        fullList.push(newListItem);
        localStorage.setItem(newListItem.getTaskID, JSON.stringify(newListItem));
        console.log(JSON.parse(localStorage.getItem(newListItem.getTaskID)));
        console.log(localStorage.length)
        console.log(newListItem.getTaskID);
    }
})

//Listens for any clicks within the tasks container.
const container = document.getElementById('container');
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
    //If 'Completed' header is clicked, expands the list of completed tasks
    if(element.target.id === "expandCompleted"){
        //Ridiculous chained DOM list points to the completedList div to check if it's collapsed
        if(element.target.nextElementSibling.firstElementChild.classList.contains('collapsed')) {
            element.target.innerHTML = "Completed ▿"
        } else {
            element.target.innerHTML = "Completed ▸"
        }
        const completedList = document.getElementById('completedList');
        completedList.classList.toggle('expanded');
        completedList.classList.toggle('collapsed');
    }
})

//Expands or collapses form for adding a new task when button is pressed
document.getElementById('inputFormButton').addEventListener('click', () => {
    const inputForm = document.getElementById('inputForm');
    inputForm.classList.toggle('expanded');
    inputForm.classList.toggle('collapsed');
})