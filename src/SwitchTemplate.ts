import Icons from './Icons.js';
import TemplateHandler from './TemplateHandler.js';

export default class SwitchTemplate{
    svgs: NodeListOf<SVGElement>;
    active: string;
    templateHandler: TemplateHandler;
    icons: Icons;

    constructor(active:string){
        this.svgs = document.querySelectorAll('.icons svg');
        this.active = active;
        this.templateHandler = new TemplateHandler(this.active);
        this.icons = new Icons(this.active, this.svgs);

        this.svgs.forEach(svg=>svg.addEventListener('click', this.handleClick.bind(this)));
    }
    handleClick(e:Event){
        const target = e.target as HTMLElement;
        const svg = target.closest('svg')! as SVGElement;
        if(svg!.classList.contains(this.active)){
            this.icons.toggleShow();
        }else{
            this.icons.changeTheme(svg);
            this.templateHandler.setTemplate();
        }
        alert('You havent override the handleClick method in from this class');
    }
}