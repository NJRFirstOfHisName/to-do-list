export default function addListItem(input) {
    const tdList = document.getElementById('tdList');

    const newItem = document.createElement('li');
    newItem.innerHTML = input;
    tdList.appendChild(newItem);
}