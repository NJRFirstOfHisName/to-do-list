export default function addListItem(input) {
    const tdList = document.getElementById('tdList');

    const newItem = document.createElement('li');
    newItem.innerHTML = input;
    tdList.appendChild(newItem);

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = "Complete";
    tdList.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    tdList.appendChild(deleteBtn);
}