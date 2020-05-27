export default async function renderProjects(){
    const res = await fetch('../../assets/projects.json');
    const projects = await res.json();
    const projectsContainer = document.querySelector('section.projects');
    console.log(projects);
    projects.forEach((project:object)=>{
        console.log(project);
    });
}