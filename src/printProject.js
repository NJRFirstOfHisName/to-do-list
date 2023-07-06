import printListItem from "./printListItem";

const tdList = document.getElementById('tdList');
const completedList = document.getElementById('completedList');

export default function printProject(fullList, value) {
    tdList.innerHTML = "";
    completedList.innerHTML = "";
    fullList.forEach(ListItem => {
        if(ListItem.getProject === value){
            printListItem(ListItem);
        }
    })
}