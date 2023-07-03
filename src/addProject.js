export default function addProject(project) {
    //First prompts the user for the new project name and checks that it's not the same as an existing project
    let newProjectName = prompt("Enter the name of your new project:") + "Project";
    for(let i=0 ; i<project.options.length ; i++) {
        let existingProject = project.options[i].value.toLowerCase();
        if (newProjectName.toLowerCase() === existingProject) {
            alert("A project already exists with that name. Please select a unique project name.");
            newProjectName = "";
        }
    }

    //Creates new project with supplied name and adds it to the select box
    if(newProjectName) {
        let newProject = document.createElement('option');
        newProject.value = newProjectName;
        newProject.text = newProjectName.slice(0, -7);
        project.add(newProject);
    }
}