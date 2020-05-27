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
            this.setActive(svg.classList[0]);
            document.body.id = this.active
            this.icons.changeTheme();
            this.templateHandler.setTemplate();
        }
    }
    setActive(theme:string){
        this.icons.active = theme;
        this.templateHandler.active = theme;
        this.active = theme;
        this.svgs.forEach(icon=>{
            icon.classList.remove('active');
            if(icon.classList.contains(this.active)){
                document.body.id = this.active
                icon.classList.add('active');
            }
        });
    }
}