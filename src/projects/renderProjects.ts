interface project{
    title: string,
    img: string,
    description: string
}

export default async function renderProjects(cb:Function|null =null){
    const res = await fetch('../../assets/projects.json');
    const projects = await res.json();
    const projectsContainer = document.querySelector('section.projects');
    
    projects.forEach((project:project)=>{
        const projectElement = `
            <div class="project">
                <img src="${project.img}" alt="">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </div>
        `
        projectsContainer?.insertAdjacentHTML('beforeend', projectElement);
    });
    if(cb){
        cb();
    }
}