import Clean from "../../themed_scripts/clean/main.js";
import ThreeD from "../../themed_scripts/threed/main.js";
import Movie from "../../themed_scripts/movie/main.js";
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
        else if (this.active === 'threed') {
            this.templateObj = new ThreeD();
        }
        else if (this.active === 'movie') {
            this.templateObj = new Movie();
        }
        if (!this.intial) {
            this.templateObj.applyListenerContainer();
            this.pageRelatedMethods();
        }
        this.intial = false;
    }
    removeListeners() {
        if (this.templateObj && this.templateObj.listeners.length > 0) {
            this.templateObj.listeners.forEach(l => {
                l.element.removeEventListener(l.type, l.referenceFunction);
            });
        }
    }
    pageRelatedMethods() {
        var _a;
        if ((_a = this.templateObj) === null || _a === void 0 ? void 0 : _a.pageMethods) {
            this.templateObj.pageMethods();
        }
    }
    resetAllContentStyling() {
        var _a, _b;
        const allElemtentsInContainer = (_a = document.querySelector('#app')) === null || _a === void 0 ? void 0 : _a.querySelectorAll("*");
        if (((_b = allElemtentsInContainer) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            allElemtentsInContainer === null || allElemtentsInContainer === void 0 ? void 0 : allElemtentsInContainer.forEach(el => {
                if (el.getAttribute('style')) {
                    el.removeAttribute('style');
                }
            });
        }
    }
}
