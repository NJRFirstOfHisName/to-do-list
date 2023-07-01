import './style.css';
import addListItem from "./addListItem";
import { doc } from 'prettier';

const tdList = document.getElementById('tdList');

const addInput = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    if(addInput.value) {
        addListItem(addInput.value);
        addInput.value = "";
    }
})

const completeBtn = document.querySelectorAll('.complete');
completeBtn.forEach((button) => {
    button.addEventListener('click', () => {
        completeItem();
    })
})

const deleteBtn = document.querySelectorAll('.delete');
deleteBtn.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentNode.remove();
    })
})