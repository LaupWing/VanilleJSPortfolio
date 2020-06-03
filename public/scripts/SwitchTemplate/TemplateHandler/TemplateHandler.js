import Clean from "../../themed_scripts/clean/main.js";
import ThreeD from "../../themed_scripts/threed/main.js";
export default class TemplateHandler {
    constructor(active) {
        this.active = active;
        this.templateObj = null;
        this.intial = true;
        this.setTemplate();
    }
    setTemplate() {
        this.removeListeners();
        this.resetAllContentStyling();
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
        this.intial = false;
    }
    removeListeners() {
        var _a;
        console.log((_a = this.templateObj) === null || _a === void 0 ? void 0 : _a.listeners);
        if (this.templateObj && this.templateObj.listeners.length > 0) {
            this.templateObj.listeners.forEach(l => {
                l.element.removeEventListener(l.type, l.referenceFunction);
            });
        }
    }
    pageRelatedMethods() {
        var _a;
        if (window.location.hash === '#projects') {
            if ((_a = this.templateObj) === null || _a === void 0 ? void 0 : _a.projects) {
                this.templateObj.projects();
            }
        }
    }
    resetAllContentStyling() {
        var _a, _b;
        const allElemtentsInContainer = (_a = document.querySelector('.content')) === null || _a === void 0 ? void 0 : _a.querySelectorAll("*");
        if (((_b = allElemtentsInContainer) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            allElemtentsInContainer === null || allElemtentsInContainer === void 0 ? void 0 : allElemtentsInContainer.forEach(el => {
                if (el.getAttribute('style')) {
                    el.removeAttribute('style');
                }
            });
        }
    }
}
