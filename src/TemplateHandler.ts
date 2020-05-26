import Clean from "./themed_scripts/clean/main.js";
import ThreeD from "./themed_scripts/threed/main.js";
import SwitchTemplate from "./SwitchTemplate.js";

export default class TemplateHandler extends SwitchTemplate{
    templateObj:object|null;
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
        const target = e.target as HTMLElement;
        const svg = target.closest('svg')! as SVGElement;
        this.active = svg.classList[0];
        this.setTemplate();
    }
}