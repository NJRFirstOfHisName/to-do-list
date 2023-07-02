import './style.css';
import printListItem from "./printListItem";
import deleteEntry from "./deleteEntry";
import ListItem from "./addListItem";

const container = document.getElementById('container');
const tdList = document.getElementById('tdList');
const completedList = document.getElementById('completedList');


const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').checked;
    if(title) {
        // const newListItem = new ListItem(title, description, date, priority);
        printListItem(title, description, date, priority);
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