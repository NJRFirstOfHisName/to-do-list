import printListItem from "./printListItem";

const tdList = document.getElementById("tdList");
const completedList = document.getElementById("completedList");

//Checks list of to-do's and prints each one that matches the current project
export default function printProject(fullList, value) {
  tdList.innerHTML = "";
  completedList.innerHTML = "";
  // fullList.forEach(ListItem => {
  //     if(ListItem.getProject === value){
  //         printListItem(ListItem);
  //         console.log("ListItem")
  //         console.log(ListItem);
  //     }
  // })
  Object.entries(window.localStorage).forEach(([key, val]) => {
    if (JSON.parse(val)._project === value) {
      printListItem(JSON.parse(val));
    }
  });
}
