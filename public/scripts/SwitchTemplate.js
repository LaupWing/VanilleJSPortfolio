import Icons from './Icons.js';
import TemplateHandler from './TemplateHandler.js';
export default class SwitchTemplate {
    constructor(active) {
        this.svgs = document.querySelectorAll('.icons svg');
        this.active = active;
        this.templateHandler = new TemplateHandler(this.active);
        this.icons = new Icons(this.active, this.svgs);
        this.svgs.forEach(svg => svg.addEventListener('click', this.handleClick.bind(this)));
    }
    handleClick(e) {
        const target = e.target;
        const svg = target.closest('svg');
        if (svg.classList.contains(this.active)) {
            this.icons.toggleShow();
        }
        else {
            this.icons.changeTheme(svg);
            this.templateHandler.setTemplate();
        }
        alert('You havent override the handleClick method in from this class');
    }
}
