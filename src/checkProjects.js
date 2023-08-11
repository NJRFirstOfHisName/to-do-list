export default function checkProjects(projectInput, project) {
  let valid = true;

  // Checks the projects in the <select> box to see if one exists with the same name
  for (let i = 0; i < project.options.length; i += 1) {
    const existingProject = project.options[i].value.toLowerCase();
    if (
      projectInput.value.toLowerCase() === existingProject.slice(0, -7) &&
      valid
    ) {
      valid = false;
    }
  }

  // Returns true if the project has unique name, otherwise returns false
  return valid;
}
