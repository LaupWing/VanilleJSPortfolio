import {isListener} from '../../../interfaces/interfaces.js';

export default class Section{
    body:HTMLBodyElement;
    localListeners:isListener[];
    listeners:isListener[];
    constructor(listeners:isListener[], body:HTMLBodyElement){
        this.body=body;
        this.localListeners =[];
        this.listeners = listeners;
    }
    addListener(listener:isListener){
        listener.element.addEventListener(listener.type, listener.referenceFunction);
        this.localListeners.push(listener);
        this.listeners.push(listener);
    }
    
}