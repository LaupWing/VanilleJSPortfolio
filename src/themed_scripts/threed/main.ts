import Theme from '../Theme.js';
import Projects from './Projects/Projects.js';

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
        if(window.location.hash === '#projects'){
            this.currentPageScript = new Projects(this.listeners, this.body);
        }
        this.links.forEach(link=>this.setPageSwitch(link));
    }
    setPageSwitch(link:HTMLLinkElement){
        console.log(link);
    }
}