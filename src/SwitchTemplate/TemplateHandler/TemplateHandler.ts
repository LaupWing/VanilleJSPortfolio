import Clean from "../../themed_scripts/clean/main.js";
import ThreeD from "../../themed_scripts/threed/main.js";

interface TemplateObj {
    applyListenerContainer: Function
    toggleLinks: Function
    handleLink: Function
    projects?: Function
    listeners: {
        element: HTMLElement|Document,
        type: string,
        referenceFunction: Function
    }[]
  }

export default class TemplateHandler{
    templateObj:TemplateObj|null;
    active: string;
    intial: boolean;
    constructor(active:string){
        this.active = active;
        this.templateObj = null;
        this.intial=true;
        this.setTemplate();
    }
    resetLinks(){
        const old_element = document.querySelector('nav ul')!;
        const new_element = old_element.cloneNode(true)!;
        old_element.parentNode!.replaceChild(new_element, old_element);
    }
    setTemplate(){
        this.resetLinks();
        this.removeListeners();
        if(this.active === 'clean'){
            this.templateObj = new Clean();
        }else{
            this.templateObj = new ThreeD();
        }
        if(!this.intial){
            this.templateObj.applyListenerContainer();
            this.pageRelatedMethods();
        }
        console.log(this.templateObj.listeners)
        this.intial = false;
    }
    removeListeners(){
        // if(this.templateObj && this.templateObj!.listeners.length>0){
        //     this.templateObj.listeners.forEach(l=>{
        //         document.getEventListeners(l.element)[l.type].forEach(o=>{
        //             console.log(o);
        //         }
        //             // function(o:any) { o.remove(); }
        //          ); 
        //     })
        // }
    }
    pageRelatedMethods(){
        if(window.location.hash === '#projects'){
            if(this.templateObj?.projects){
                this.templateObj.projects();
            }
        }
    }
}