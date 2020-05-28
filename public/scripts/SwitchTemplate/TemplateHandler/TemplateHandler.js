import Clean from "../../themed_scripts/clean/main.js";
import ThreeD from "../../themed_scripts/threed/main.js";
export default class TemplateHandler {
    constructor(active) {
        this.active = active;
        this.templateObj = null;
        this.intial = true;
        this.setTemplate();
    }
    resetLinks() {
        const old_element = document.querySelector('nav ul');
        const new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
    }
    setTemplate() {
        this.resetLinks();
        if (this.active === 'clean') {
            this.templateObj = new Clean();
        }
        else {
            this.templateObj = new ThreeD();
        }
        if (!this.intial) {
            this.templateObj.applyListenerContainer();
            this.pageRelatedMethods();
        }
        console.log(this.templateObj.listeners);
        this.intial = false;
    }
    pageRelatedMethods() {
        var _a;
        if (window.location.hash === '#projects') {
            if ((_a = this.templateObj) === null || _a === void 0 ? void 0 : _a.projects) {
                this.templateObj.projects();
            }
        }
    }
}
