export default function addProject(project) {
    let name = document.getElementById("projectInput").value  + "Project";
    let valid = true;
    for(let i=0 ; i<project.options.length ; i++) {
        let existingProject = project.options[i].value.toLowerCase();
        if (name.toLowerCase() === existingProject) {
            alert("A project already exists with that name. Please select a unique project name.");
            valid = false;
        }
    }

    //Creates new project with supplied name and adds it to the select box
    if(valid) {
        let newProject = document.createElement('option');
        newProject.value = name;
        newProject.text = name.slice(0, -7);
        project.add(newProject);
    }
}