import Clean from "../../themed_scripts/clean/main.js";
import ThreeD from "../../themed_scripts/threed/main.js";
import Movie from "../../themed_scripts/movie/main.js";
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
        }else if(this.active === 'threed'){
            this.templateObj = new ThreeD();
        }else if(this.active === 'movie'){
            this.templateObj = new Movie();
        }
        if(!this.intial){
            this.templateObj!.applyListenerContainer();
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
        if(this.templateObj?.pageMethods){
            this.templateObj.pageMethods();
        }
    }
    resetAllContentStyling(){
        const allElemtentsInContainer = document.querySelector('#app')?.querySelectorAll("*");
        if(allElemtentsInContainer!?.length>0){
            allElemtentsInContainer?.forEach(el=>{
                if(el.getAttribute('style')){
                    el.removeAttribute('style');
                }
            });
        }
    }
}