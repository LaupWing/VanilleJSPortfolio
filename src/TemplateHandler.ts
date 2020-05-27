import Clean from "./themed_scripts/clean/main.js";
import ThreeD from "./themed_scripts/threed/main.js";
import SwitchTemplate from "./SwitchTemplate.js";

interface TemplateObj {
    applyListenerContainer: Function
    toggleLinks: Function
    handleLink: Function
  }

export default class TemplateHandler extends SwitchTemplate{
    templateObj:TemplateObj|null;
    constructor(template:string){
        super(template);
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
    handleClick(e:Event){
        console.log('click from tempaltehandler')
        const target = e.target as HTMLElement;
        const svg = target.closest('svg')! as SVGElement;
        if(this.active === svg.classList[0]){
            return
        }
        console.log('it changed');
        this.active = svg.classList[0];
        this.setTemplate();
    }
}