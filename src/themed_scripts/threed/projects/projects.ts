import getProminentColor from '../../../utils/getProminentColor.js';
import {isListener} from '../../../interfaces/interfaces.js';

export default class Projects{
    projects:NodeListOf<HTMLDivElement>;
    current:number;
    activeProject:HTMLDivElement|null;
    body:HTMLBodyElement;
    projectListeners:isListener[];
    listeners:isListener[];
    constructor(listeners:isListener[], body:HTMLBodyElement){
        this.projects = document.querySelectorAll('.project');
        this.activeProject = null;
        this.body=body;
        this.current = 0;
        this.projectListeners =[];
        this.listeners = listeners;
        this.init();
    }
    init(){
        this.setActiveProject();
        const description = this.activeProject!.querySelector('.project-info p');
        this.addListener({
            element: description as HTMLElement,
            type: 'animationend' ,
            referenceFunction: this.descriptionAnimEnded 
         });
        description?.addEventListener('animationend', this.descriptionAnimEnded);
    }
    setActiveProject(){
        this.projects.forEach(project=>project.classList.remove('active'));
        this.activeProject = this.projects[this.current];
        this.activeProject.classList.add('active');
    }
    move = (e:MouseEvent)=>{
        const ax = -(window.innerWidth/2- e.pageX)/20;
        const ay = (window.innerHeight/2- e.pageY)/10;
        this.activeProject!.style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)"
    }
    descriptionAnimEnded = ()=>{
        const color = getProminentColor(this.activeProject!.querySelector('img')!);
        this.body.style.setProperty('--background-color',`rgb(${color.r},${color.g},${color.b})`);

        this.addListener({
           element: document,
           type: 'mousemove',
           referenceFunction: this.move
        });
    
        document.addEventListener('mousemove', this.move);
    }
    addListener(listener:isListener){
        this.projectListeners.push(listener);
        this.listeners.push(listener);
    }
}