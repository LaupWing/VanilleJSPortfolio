import Theme from '../Theme.js';

export default class ThreeD extends Theme{
    constructor(){
        super();
    }
    projects(){
        const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>;
        const activeProject = projects[0];
        activeProject.classList.add('active');
        
        document.addEventListener('mousemove',(e)=>{
            console.log('remove');
            const ax = window.innerWidth/2- e.pageX/20;
            const ay = window.innerHeight/2- e.pageY/10;
            activeProject.style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg);"
        })
    }
}