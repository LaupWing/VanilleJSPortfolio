import {isListener, ListElements} from '../../../interfaces/interfaces.js';

export default class Links{
    registerAndApplyListener: Function
    links:ListElements;
    listeners:isListener[];
    constructor(listeners: isListener[], registerAndApplyListener:Function, links:ListElements){
        this.registerAndApplyListener = registerAndApplyListener;
        this.links = links;
        this.listeners = listeners;
        this.init();
    }
    init(){
        this.links.forEach(link=>{
            this.registerAndApplyListener({
                element: link,
                type: 'click',
                referenceFunction: this.showContent 
            });
        })
    }
    showContent = ()=>{
        const container = document.querySelector('nav ul');
        const content = document.querySelector('.content');
        const animEnded = ()=>{
            content?.classList.add('appear');
            container?.removeEventListener('animationend', animEnded);
        }
        container?.addEventListener('animationend', animEnded);
        container?.classList.add('disappear');
    }
}