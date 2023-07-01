import './style.css';
import addListItem from "./addListItem";
import deleteEntry from "./deleteEntry";
import { doc } from 'prettier';

const container = document.getElementById('container');
const tdList = document.getElementById('tdList');
const completedList = document.getElementById('completedList');

const addInput = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    if(addInput.value) {
        const newEntry = addListItem(addInput.value);
        addInput.value = "";

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
        console.log(e.target)
        console.log(e.target.nextElementSibling);
        console.log(labelChange);
    }
})

// const checkbox = document.querySelectorAll('.check');
// checkbox.forEach((check) => {
//     check.addEventListener('change', () => {
//         const labelChange = check.nextSibling.nextSibling;
//         if(check.checked) {
//             labelChange.style.setProperty("text-decoration", "line-through");
//             completedList.appendChild(check.parentNode);
//         } else {
//             labelChange.style.setProperty("text-decoration", "");
//             tdList.appendChild(check.parentNode);
//         }
//     })
// })

// const deleteBtn = document.querySelectorAll('.delete');
// deleteBtn.forEach((button) => {
//     button.addEventListener('click', () => {
//         button.parentNode.remove();
//     })
// })