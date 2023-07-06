export default function addProject(valid, projectInput) {
    const project = document.getElementById('projects');

    let projectError = document.getElementById('projectError');
    if(valid) {
        //Creates new project with supplied name and adds it to the select box
        let newProject = document.createElement('option');
        newProject.value = projectInput.value + "Project";
        newProject.text = projectInput.value;
        project.add(newProject);

        //Makes newProject the active project
        project.value = newProject.value;
        projectError.innerHTML = "";
        projectInput.value = "";
        document.getElementById('projectAdd').classList.toggle('expanded');       
    } else {
        projectError.innerHTML = "Project name in use.";
    }
}