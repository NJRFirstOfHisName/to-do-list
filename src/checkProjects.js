export default function checkProjects(projectInput, project) {
    let valid = true;

    for(let i=0 ; i<project.options.length ; i++) {
        let existingProject = project.options[i].value.toLowerCase();
        if (projectInput.value.toLowerCase() === existingProject.slice(0, -7) && valid) {
            valid = false;
        }
    }

    return valid;
}