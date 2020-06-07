import {isListener} from '../../../interfaces/interfaces.js';
import getProminentColor from '../../../utils/getProminentColor.js';
import invertColor from '../../../utils/invertColor.js';

export default class Section{
    body:HTMLBodyElement;
    localListeners:isListener[];
    listeners:isListener[];
    getProminentColor:Function;
    invertColor:Function;
    constructor(listeners:isListener[], body:HTMLBodyElement){
        this.body=body;
        this.localListeners =[];
        this.listeners = listeners;
        this.getProminentColor = getProminentColor;
        this.invertColor = invertColor;
    }
    addListener(listener:isListener){
        listener.element.addEventListener(listener.type, listener.referenceFunction);
        this.localListeners.push(listener);
        this.listeners.push(listener);
    }
    
}