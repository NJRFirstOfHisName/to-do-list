import './style.css';
import addListItem from "./addListItem";
import { doc } from 'prettier';

const tdList = document.getElementById('tdList');
const completedList = document.getElementById('completedList');

const addInput = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    if(addInput.value) {
        addListItem(addInput.value);
        addInput.value = "";
    }
})

const checkbox = document.querySelectorAll('.check');
checkbox.forEach((check) => {
    check.addEventListener('change', () => {
        const labelChange = check.nextSibling.nextSibling;
        if(check.checked) {
            labelChange.style.setProperty("text-decoration", "line-through");
            completedList.appendChild(check.parentNode);
        } else {
            labelChange.style.setProperty("text-decoration", "");
            tdList.appendChild(check.parentNode);
        }
    })
})

const deleteBtn = document.querySelectorAll('.delete');
deleteBtn.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentNode.remove();
    })
})