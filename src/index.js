import './style.css';
import addListItem from "./addListItem";

const tdList = document.getElementById('tdList');

const addInput = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    if(addInput.value) {
        addListItem(addInput.value);
    }
})
