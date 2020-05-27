import Clean from "../../themed_scripts/clean/main.js";
import ThreeD from "../../themed_scripts/threed/main.js";
export default class TemplateHandler {
    constructor(active) {
        this.active = active;
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
}
