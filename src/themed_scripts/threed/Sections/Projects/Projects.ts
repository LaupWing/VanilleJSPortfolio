import getProminentColor from '../../../../utils/getProminentColor.js';
import invertColor from '../../../../utils/invertColor.js';
import {isListener} from '../../../../interfaces/interfaces.js';
import Sections from '../Sections.js';

export default class Projects extends Sections{
    projects:NodeListOf<HTMLDivElement>;
    current:number;
    activeProject:HTMLDivElement|null;
    constructor(listeners:isListener[], body:HTMLBodyElement){
        super(listeners, body);
        this.projects = document.querySelectorAll('.project');
        this.activeProject = null;
        this.current = 0;
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
        this.movingContainer = this.activeProject;
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

            this.removeElListener(description as HTMLElement);
            this.removeElListener(document as Document);

            this.setActiveProject();
            this.descriptionAnimEndedEvent();
            this.disableButtons();
        }
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
}