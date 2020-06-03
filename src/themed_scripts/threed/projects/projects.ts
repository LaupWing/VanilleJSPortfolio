import getProminentColor from '../../../utils/getProminentColor.js';

export default class Projects{
    projects:NodeListOf<HTMLDivElement>;
    current:number;
    activeProject:HTMLDivElement|null;
    body:HTMLBodyElement;
    projectListeners:[];
    constructor(listeners:any, body:HTMLBodyElement){
        this.projects = document.querySelectorAll('.project');
        this.activeProject = null;
        this.body=body;
        this.current = 0;
        this.projectListeners =[];
    }
    setActiveProject(){
        this.projects.forEach(project=>project.classList.remove('active'));
        this.activeProject = this.projects[this.current];
        this.activeProject.classList.add('active');

    }
    move(e:MouseEvent){
        const ax = -(window.innerWidth/2- e.pageX)/20;
        const ay = (window.innerHeight/2- e.pageY)/10;
        this.activeProject!.style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)"
    }
    descriptionAnimEnded(){
        const color = getProminentColor(this.activeProject!.querySelector('img')!);
        this.body.style.setProperty('--background-color',`rgb(${color.r},${color.g},${color.b})`);
    
        // this.projectListeners.push({
        //    element: document,
        //    type: 'mousemove' ,
        //    referenceFunction: move 
        // });
    
        document.addEventListener('mousemove', this.move);
    }
    placeholder(){
        
        const description = this.activeProject!.querySelector('.project-info p');
        description?.addEventListener('animationend', ()=>{
        })
    }
}