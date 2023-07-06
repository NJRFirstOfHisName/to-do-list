import printListItem from "./printListItem";

const tdList = document.getElementById('tdList');
const completedList = document.getElementById('completedList');

//Checks list of to-do's and prints each one that matches the current project
export default function printProject(fullList, value) {
    tdList.innerHTML = "";
    completedList.innerHTML = "";
    fullList.forEach(ListItem => {
        if(ListItem.getProject === value){
            printListItem(ListItem);
        }
    })
}