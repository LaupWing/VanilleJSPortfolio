import Clean from "./themed_scripts/clean/main.js";
import ThreeD from "./themed_scripts/threed/main.js";
import SwitchTemplate from "./SwitchTemplate.js";
export default class TemplateHandler extends SwitchTemplate {
    constructor(template) {
        super(template);
        this.templateObj = null;
        this.setTemplate();
    }
    setTemplate() {
        if (this.active === 'clean') {
            this.templateObj = new Clean();
        }
        else {
            this.templateObj = new ThreeD();
        }
    }
    handleClick(e) {
        const target = e.target;
        const svg = target.closest('svg');
        this.active = svg.classList[0];
        this.setTemplate();
    }
}
