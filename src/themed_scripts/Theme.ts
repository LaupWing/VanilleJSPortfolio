import {isTheme, isListener, isGlobalCss} from '../interfaces/interfaces.js';

export default class Theme implements isTheme{
    links: NodeListOf<HTMLLinkElement>;
    container: HTMLDivElement | null;
    goto: string;
    listeners: isListener[];
    theme:string;
    constructor(theme:string, globalCssVars:isGlobalCss){
        this.links = document.querySelectorAll('nav ul a');
        this.container = document.querySelector('#app .content');
        this.goto= window.location.href;
        this.listeners = [];
        this.theme = theme;
        this.applyListenerLinks();
        this.setGloblalCSSVars(globalCssVars as isGlobalCss);
    }
    setGloblalCSSVars(globalCssVars: {[k: string]: any} = {}){
        const container = document.getElementById(this.theme);
        for(let key in globalCssVars){
            container?.style.setProperty(key, globalCssVars[key])
        }
    }
    toggleLinks(state:string){
        if(state === 'add'){
            this.links.forEach(link=>link.classList.add('disabled'));
        }else{
            this.links.forEach(link=>link.classList.remove('disabled'));
        }
    }
    handleLink = (e:Event)=>{
        e.preventDefault();
        const clickedLink = e.target as HTMLLinkElement;
        const newLocation = clickedLink.href;
        if(this.goto === newLocation){
            return;
        }
        this.links.forEach(link=>link.classList.remove('active'));
        clickedLink.classList.add('active');
        this.goto = newLocation;
        this.container!.classList.add('dissappear');
        this.toggleLinks('add');
    }
    handleAnimEndContainer= (e:Event)=>{
        const el = e.target as HTMLDivElement;
        if(el.classList.contains('appear')){
            el.classList.remove('appear');
            this.toggleLinks('remove');
        }else{
            window.location.href = this.goto!;
        }
    }
    applyListenerLinks(){
        this.links.forEach(link=>{
            if(window.location.hash.length === 0){
                if(link.href === `${window.location.origin}/#`){
                    link.classList.add('active');
                }
            }else{
                if(link.href === window.location.href){
                    link.classList.add('active');
                }
            }
            this.registerAndApplyListener({
                element: link,
                type: 'click',
                referenceFunction: this.handleLink
            });
        });
    }
    applyListenerContainer(){
        this.container = document.querySelector('#app .content') as HTMLDivElement;
        this.registerAndApplyListener({
            element: this.container,
            type: 'animationend',
            referenceFunction:this.handleAnimEndContainer 
        });
    }
    registerAndApplyListener({element, type, referenceFunction}:isListener){
        this.listeners.push({
            element,
            type,
            referenceFunction
        });
        element.addEventListener(type, referenceFunction);
    }
}