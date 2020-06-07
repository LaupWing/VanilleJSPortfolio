import {isListener} from '../../../interfaces/interfaces.js';
import getProminentColor from '../../../utils/getProminentColor.js';
import invertColor from '../../../utils/invertColor.js';

export default class Section{
    body:HTMLBodyElement;
    localListeners:isListener[];
    listeners:isListener[];
    movingContainer:HTMLDivElement|null;
    constructor(listeners:isListener[], body:HTMLBodyElement){
        this.body=body;
        this.localListeners = [];
        this.listeners = listeners;
        this.movingContainer = null;
    }
    addListener(listener:isListener){
        listener.element.addEventListener(listener.type, listener.referenceFunction);
        this.localListeners.push(listener);
        this.listeners.push(listener);
    }
    move = (e:MouseEvent)=>{
        const ax = -(window.innerWidth/2- e.pageX)/20;
        const ay = (window.innerHeight/2- e.pageY)/10;
        this.movingContainer!.style.transform = "rotateY("+ax+"deg) rotateX("+ay+"deg)"
    }
    setCssVar(){
        const color = getProminentColor(this.movingContainer!.querySelector('img')!);
        const invertedColor = invertColor(color);
        this.body.style.setProperty('--background-color',`rgb(${color.r},${color.g},${color.b})`);
        this.body.style.setProperty('--highlight-color',invertedColor);
    }
    removeElListener(el:HTMLElement|Document){
        const listenerObjs = this.listeners.filter(l=>l.element===el);
        this.listeners = this.listeners.filter(l=>l.element!==el);
        this.localListeners = this.localListeners.filter(l=>l.element!==el);
        
        listenerObjs.forEach(({element, type, referenceFunction})=>{
            element.removeEventListener(type, referenceFunction);
        });
    }
}