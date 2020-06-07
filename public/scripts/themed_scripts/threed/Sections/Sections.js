import getProminentColor from '../../../utils/getProminentColor.js';
import invertColor from '../../../utils/invertColor.js';
export default class Section {
    constructor(listeners, body) {
        this.move = (e) => {
            const ax = -(window.innerWidth / 2 - e.pageX) / 20;
            const ay = (window.innerHeight / 2 - e.pageY) / 10;
            this.movingContainer.style.transform = "rotateY(" + ax + "deg) rotateX(" + ay + "deg)";
        };
        this.body = body;
        this.localListeners = [];
        this.listeners = listeners;
        this.movingContainer = null;
    }
    addListener(listener) {
        listener.element.addEventListener(listener.type, listener.referenceFunction);
        this.localListeners.push(listener);
        this.listeners.push(listener);
    }
    setCssVar() {
        const color = getProminentColor(this.movingContainer.querySelector('img'));
        const invertedColor = invertColor(color);
        this.body.style.setProperty('--background-color', `rgb(${color.r},${color.g},${color.b})`);
        this.body.style.setProperty('--highlight-color', invertedColor);
    }
    removeElListener(el) {
        const listenerObjs = this.listeners.filter(l => l.element === el);
        this.listeners = this.listeners.filter(l => l.element !== el);
        this.localListeners = this.localListeners.filter(l => l.element !== el);
        listenerObjs.forEach(({ element, type, referenceFunction }) => {
            element.removeEventListener(type, referenceFunction);
        });
    }
}
