export default class Section {
    constructor(listeners, body) {
        this.body = body;
        this.localListeners = [];
        this.listeners = listeners;
    }
    addListener(listener) {
        listener.element.addEventListener(listener.type, listener.referenceFunction);
        this.localListeners.push(listener);
        this.listeners.push(listener);
    }
}
