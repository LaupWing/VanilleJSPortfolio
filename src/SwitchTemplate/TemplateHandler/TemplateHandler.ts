import Clean from "../../themed_scripts/clean/main.js";
import ThreeD from "../../themed_scripts/threed/main.js";

interface TemplateObj {
    applyListenerContainer: Function
    toggleLinks: Function
    handleLink: Function
  }

export default class TemplateHandler{
    templateObj:TemplateObj|null;
    active: string;

    constructor(active:string){
        this.active = active;
        this.templateObj = null;
        this.setTemplate();
    }
    setTemplate(){
        if(this.active === 'clean'){
            this.templateObj = new Clean();
        }else{
            this.templateObj = new ThreeD();
        }
    }
}