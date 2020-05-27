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
            this.setActive(svg.classList[0]);
            document.body.id = this.active;
            this.icons.changeTheme();
            this.templateHandler.setTemplate();
        }
    }
    setActive(theme) {
        this.icons.active = theme;
        this.templateHandler.active = theme;
        this.active = theme;
        this.svgs.forEach(icon => {
            icon.classList.remove('active');
            if (icon.classList.contains(this.active)) {
                document.body.id = this.active;
                icon.classList.add('active');
            }
        });
    }
}
