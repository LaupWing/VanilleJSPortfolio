import getProminentColor from '../../../utils/getProminentColor.js';
import invertColor from '../../../utils/invertColor.js';
export default class Section {
    constructor(listeners, body) {
        this.body = body;
        this.localListeners = [];
        this.listeners = listeners;
        this.getProminentColor = getProminentColor;
        this.invertColor = invertColor;
    }
    addListener(listener) {
        listener.element.addEventListener(listener.type, listener.referenceFunction);
        this.localListeners.push(listener);
        this.listeners.push(listener);
    }
}
