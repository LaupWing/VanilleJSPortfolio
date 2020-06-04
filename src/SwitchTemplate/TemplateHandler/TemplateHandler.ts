import Clean from "../../themed_scripts/clean/main.js";
import ThreeD from "../../themed_scripts/threed/main.js";
import {isTemplate} from '../../interfaces/interfaces';

export default class TemplateHandler{
    templateObj:isTemplate|null;
    active: string;
    intial: boolean;
    constructor(active:string){
        this.active = active;
        this.templateObj = null;
        this.intial=true;
        this.setTemplate();
    }
    setTemplate(){
        this.removeListeners();
        this.resetAllContentStyling();
        if(this.active === 'clean'){
            this.templateObj = new Clean();
        }else{
            this.templateObj = new ThreeD();
        }
        if(!this.intial){
            this.templateObj.applyListenerContainer();
            this.pageRelatedMethods();
        }
        this.intial = false;
    }
    removeListeners(){
        if(this.templateObj && this.templateObj!.listeners.length>0){
            this.templateObj.listeners.forEach(l=>{
                l.element.removeEventListener(l.type, l.referenceFunction)
            })
        }
    }
    pageRelatedMethods(){
        if(window.location.hash === '#projects'){
            if(this.templateObj?.projects){
                this.templateObj.projects();
            }
        }
    }
    resetAllContentStyling(){
        const allElemtentsInContainer = document.querySelector('.content')?.querySelectorAll("*");
        if(allElemtentsInContainer!?.length>0){
            allElemtentsInContainer?.forEach(el=>{
                if(el.getAttribute('style')){
                    el.removeAttribute('style');
                }
            });
        }
    }
}