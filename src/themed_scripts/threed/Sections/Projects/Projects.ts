import getProminentColor from '../../../../utils/getProminentColor.js';
import invertColor from '../../../../utils/invertColor.js';
import {isListener} from '../../../../interfaces/interfaces.js';

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
        this.descriptionAnimEndedEvent();
        this.buttonEvents();
        this.projectAnimEndedEvents();
        this.disableButtons();
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
    buttonEvents(){
        const prevBtn = this.body.querySelector('button.prev') as HTMLButtonElement;
        const nextBtn = this.body.querySelector('button.next') as HTMLButtonElement;

        this.addListener({
            element: prevBtn,
            type: 'click',
            referenceFunction: this.projectSwitcher
        });
        this.addListener({
            element: nextBtn,
            type: 'click',
            referenceFunction: this.projectSwitcher
        });
    }
    projectAnimEnded=(e:AnimationEvent)=>{
        const target = <HTMLElement>e.target 
        if(target.classList.contains('project')){
            target.classList.remove('active');
            target.classList.remove('dissappear');
            target.removeAttribute('style');
            const description = target.querySelector('.project-info p');

            this.removeListener(description as HTMLElement);
            this.removeListener(document as Document);

            this.setActiveProject();
            this.descriptionAnimEndedEvent();
            this.disableButtons();
        }
    }
    removeListener(el:HTMLElement|Document){
        const listenerObjs = this.listeners.filter(l=>l.element===el);
        this.listeners = this.listeners.filter(l=>l.element!==el);
        this.projectListeners = this.projectListeners.filter(l=>l.element!==el);
        
        listenerObjs.forEach(({element, type, referenceFunction})=>{
            element.removeEventListener(type, referenceFunction);
        });
    }
    projectAnimEndedEvents(){
        this.projects.forEach(project=>{
            this.addListener({
                element: project,
                type: 'animationend',
                referenceFunction: this.projectAnimEnded
            })
        })
    }
    disableButtons(){
        const prevBtn = this.body.querySelector('button.prev') as HTMLButtonElement;
        const nextBtn = this.body.querySelector('button.next') as HTMLButtonElement;

        prevBtn.classList.remove('disabled');
        nextBtn.classList.remove('disabled');

        if(this.current === 0){
            prevBtn.classList.add('disabled');
        }
        if(this.current === (this.projects.length-1)){
            nextBtn.classList.add('disabled');
        }
    }
    projectSwitcher = (e:MouseEvent)=>{
        const targetClass = (<HTMLButtonElement>e.target).classList[0];
        this.projects[this.current].classList.add('dissappear');
        if(targetClass === 'next'){
            if(this.current < this.projects.length){
                this.current += 1;
            }
        }else{
            if(this.current > 0){
                this.current -= 1;
            }
        }
    }
    descriptionAnimEndedEvent(){
        const description = this.activeProject!.querySelector('.project-info p');
        this.addListener({
            element: description as HTMLElement,
            type: 'animationend' ,
            referenceFunction: this.descriptionAnimEnded 
         });
    }
    descriptionAnimEnded = ()=>{
        const color = getProminentColor(this.activeProject!.querySelector('img')!);
        const invertedColor = invertColor(color);
        this.body.style.setProperty('--background-color',`rgb(${color.r},${color.g},${color.b})`);
        this.body.style.setProperty('--highlight-color',invertedColor);

        this.addListener({
           element: document,
           type: 'mousemove',
           referenceFunction: this.move
        });
    }
    addListener(listener:isListener){
        listener.element.addEventListener(listener.type, listener.referenceFunction);
        this.projectListeners.push(listener);
        this.listeners.push(listener);
    }
}