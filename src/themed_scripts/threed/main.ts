import Theme from '../Theme.js';
import Projects from './Sections/Projects/Projects.js';

export default class ThreeD extends Theme{
    body: HTMLBodyElement;
    currentPageScript: Object|null;
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
        console.log('Setting page methods');
        if(this.currentPageScript){
            console.log(this.currentPageScript.localListeners);
        }
        console.log(this);
        if(window.location.hash === '#projects'){
            this.currentPageScript = new Projects(this.listeners, this.body);
        }
    }
    setPageSwitch(link:HTMLLinkElement){
        const switchPage = ()=>{
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