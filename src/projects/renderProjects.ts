interface project{
    title: string,
    img: string
}

export default async function renderProjects(){
    const res = await fetch('../../assets/projects.json');
    const projects = await res.json();
    const projectsContainer = document.querySelector('section.projects');
    console.log(projects);
    projects.forEach((project:project)=>{
        const projectElement = `
            <div class="project">
                <h3>${project.title}</h3>
                <img src="${project.img}" alt="">
                <p></p>
            </div>
        `
        projectsContainer?.insertAdjacentHTML('beforeend', projectElement);
    });
}