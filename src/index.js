import "./style.css";
import ListItem from "./addListItem";
import printListItem from "./printListItem";
import addProject from "./addProject";
import checkProjects from "./checkProjects";
import printProject from "./printProject";

// Dom elements used for and in event listeners
const project = document.getElementById("projects");

let fullList = [];

fullList.forEach((LI) => {
  localStorage.setItem(LI.getTaskID, JSON.stringify(LI));
});

// Prints contents of default project on page load
printProject(fullList, project.value);

// Prints contents of selected project when selection is changed
project.addEventListener("change", () => {
  printProject(fullList, project.value);

  // Closes the menu if user is on a mobile screen
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("expanded")) {
    sidebar.classList.toggle("expanded");
  }
});

// Expands or collapses the form for adding a project when button is pressed
document.getElementById("projectFormButton").addEventListener("click", () => {
  const projectAdd = document.getElementById("projectAdd");
  projectAdd.classList.toggle("expanded");
  projectAdd.classList.toggle("collapsed");
});

// Creates new project when 'New Project' button is pressed
document.getElementById("newProject").addEventListener("click", () => {
  const projectInput = document.getElementById("projectInput");
  const valid = checkProjects(projectInput, project);
  addProject(valid, projectInput);
  if (valid) projectInput.value = "";
  printProject(fullList, project.value);
});

// Creates a new, uncompleted task when 'Add' button is pressed IF title is present
document.getElementById("addBtn").addEventListener("click", () => {
  const title = document.getElementById("titleInput");
  const description = document.getElementById("descriptionForm");
  const dueDate = document.getElementById("dueDate");
  const priority = document.getElementById("priority");

  if (title.value.trim()) {
    const newListItem = new ListItem(
      title.value,
      description.value,
      dueDate.value,
      priority.checked,
      project.value
    );
    printListItem(newListItem);
    fullList.push(newListItem);

    // Clears all inputs
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.checked = false;
    document.getElementById("inputForm").classList.toggle("expanded");

    // Closes the menu if user is on a mobile device
    const sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("expanded")) {
      sidebar.classList.toggle("expanded");
    }
    // localStorage.setItem(newListItem.getTaskID, JSON.stringify(newListItem));
  } else {
    // If the title is whitespace, removes it and waits for a new title.
    title.value = "";
  }
});

// Listens for any clicks within the tasks container.
const container = document.getElementById("container");
container.addEventListener("click", (element) => {
  const parent = element.target.parentNode;
  // If delete button is clicked, deletes task.
  if (element.target.classList.contains("delete")) {
    fullList = fullList.filter((task) => task.getTaskID !== parent.id);
    parent.classList.add("entry-remove");
    parent.addEventListener("animationend", () => {
      parent.remove();
    });
  }
  // If checkbox is clicked, toggles 'completed' and moves task from 'tasks' to 'completed' or vice-versa
  if (element.target.classList.contains("check")) {
    const toggleIndex = fullList.map((e) => e.getTaskID).indexOf(parent.id);
    fullList[toggleIndex].completed = !fullList[toggleIndex].getCompleted;
    printListItem(fullList[toggleIndex]);
    parent.classList.add("entry-remove");
    parent.addEventListener("animationend", () => {
      parent.remove();
    });
  }
  // If 'Completed' header is clicked, expands the list of completed tasks
  if (element.target.id === "expandCompleted") {
    const completed = element.target;
    // Ridiculous chained DOM list points to the completedList div to check if it's collapsed
    if (
      completed.nextElementSibling.firstElementChild.classList.contains(
        "collapsed"
      )
    ) {
      completed.innerText = "Completed ▿";
    } else {
      completed.innerText = "Completed ▶";
    }
    const completedList = document.getElementById("completedList");
    completedList.classList.toggle("expanded");
    completedList.classList.toggle("collapsed");
  }
});

const mobileMenu = document.querySelector(".menu-button");
mobileMenu.addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("expanded");
});

// Expands or collapses form for adding a new task when button is pressed
document.getElementById("inputFormButton").addEventListener("click", () => {
  const inputForm = document.getElementById("inputForm");
  inputForm.classList.toggle("expanded");
});
