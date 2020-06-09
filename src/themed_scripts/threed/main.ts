import Theme from '../Theme.js';
import Projects from './Sections/Projects/Projects.js';
import Home from './Sections/Home/Home.js';
import {isSection} from './Sections/Sections';

export default class ThreeD extends Theme{
    body: HTMLBodyElement;
    currentPageScript: isSection|null;
    constructor(){
        super(
            'threed',
            {
                '--background-color': '#111111',
                '--highlight-color': '#F082AC',
                '--main-font-color': 'white'
            }
        );
        this.body = document.getElementById('threed') as HTMLBodyElement;
        this.init();
        this.currentPageScript = null;
    }
    init(){
        this.links.forEach(link=>this.setPageSwitch(link));
    }
    pageMethods(){
        this.removeLocalListeners();
        if(window.location.hash === ''){
            this.currentPageScript = new Home(this.listeners, this.body);
        }
        if(window.location.hash === '#projects'){
            this.currentPageScript = new Projects(this.listeners, this.body);
        }
    }
    removeLocalListeners(){
        if(this.currentPageScript){
            const {localListeners} = this.currentPageScript;
            localListeners.forEach(({element, type, referenceFunction})=>element.removeEventListener(type, referenceFunction));
            this.listeners = this.listeners.filter(value => !localListeners.includes(value));
            this.currentPageScript.localListeners = [];
        }

    }
    setPageSwitch(link:HTMLLinkElement){
        const switchPage = ()=>{
            const hashes = ["#about","#projects", "#contact"];
            const to = link.href === "#" ? 0 : Array.from(this.links).indexOf(link);
            const from = window.location.hash === '' ? 0 : hashes.indexOf(window.location.hash)+1;  
            console.log(window.location.hash)
            console.log(link.href)
            console.log({to, from});
            this.body.style.setProperty('--page-switch-enter', 'translateX(-100px)');
            this.body.style.setProperty('--page-switch-exit', 'translateX(100px)');
        }
        this.registerAndApplyListener({
            element:link,
            type: 'click',
            referenceFunction: switchPage
        });
    }
}