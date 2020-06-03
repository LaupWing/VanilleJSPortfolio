export default class Projects{
    projects:NodeListOf<HTMLDivElement>;
    current:number;
    activeProject:HTMLDivElement|null;
    constructor(){
        this.projects = document.querySelectorAll('.project');
        this.activeProject = null;
        this.current = 0;
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
        
    }
    placeholder(){
        
        // const description = this.activeProject.querySelector('.project-info p');
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