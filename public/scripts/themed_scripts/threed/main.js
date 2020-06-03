import Theme from '../Theme.js';
import Projects from './Projects/Projects.js';
export default class ThreeD extends Theme {
    constructor() {
        super('threed', {
            '--background-color': '#111111',
            '--highlight-color': '#F082AC',
            '--main-font-color': 'white'
        });
        this.body = document.getElementById('threed');
        new Projects(this.listeners, this.body);
    }
    projects() {
        // const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>;
        // const activeProject = projects[0];
        // activeProject.classList.add('active');
        // const move = (e:MouseEvent)=>{
        //     const ax = -(window.innerWidth/2- e.pageX)/20;
        //     const ay = (window.innerHeight/2- e.pageY)/10;
        //     activeProject.style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)"
        // }
        // const description = activeProject.querySelector('.project-info p');
        // description?.addEventListener('animationend', ()=>{
        //     const color = getProminentColor(activeProject.querySelector('img')!);
        //     this.body.style.setProperty('--background-color',`rgb(${color.r},${color.g},${color.b})`);
        //     this.listeners.push({
        //        element: document,
        //        type: 'mousemove' ,
        //        referenceFunction: move 
        //     });
        //     document.addEventListener('mousemove', move);
        // })
    }
}
