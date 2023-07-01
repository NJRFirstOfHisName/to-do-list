import addListItem from "./addListItem";

const tdList = document.getElementById('tdList');

const addInput = document.createElement('input');
tdList.appendChild(addInput);
const addBtn = document.createElement('button');
addBtn.innerHTML = "Add";
addBtn.addEventListener('click', () => {
    if(addInput.value) {
        addListItem(addInput.value);
    }
})
tdList.appendChild(addBtn);