import Theme from '../Theme.js';
import getProminentColor from '../../utils/getProminentColor.js';

export default class ThreeD extends Theme{
    constructor(){
        super();
    }
    projects(){
        const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>;
        const activeProject = projects[0];
        activeProject.classList.add('active');
        
        // const move = (e:MouseEvent)=>{
        //     const ax = -(window.innerWidth/2- e.pageX)/20;
        //     const ay = (window.innerHeight/2- e.pageY)/10;
        //     activeProject.style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)"
        // }

        // const color = getProminentColor(activeProject.querySelector('img')!);
        // console.log(color);
        // document.body.style.background = `rgb(${color.r},${color.g},${color.b})`
        // this.listeners.push({
        //    element: document,
        //    type: 'mousemove' ,
        //    referenceFunction: move 
        // });

        // document.addEventListener('mousemove', move);
    }
}