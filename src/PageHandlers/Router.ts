import Route from './Route.js';
import Clean from '../themed_scripts/clean/main.js';

export default class Router{
    root:HTMLDivElement;
    routes:Route[];

    constructor(routes:Route[]){
        this.root = document.getElementById('app') as HTMLDivElement;
        this.routes = routes;
        window.addEventListener('hashchange', (e)=>{
            this.hashChanged();
        });
    }    
    hashChanged():void{
        const currentHash:string = window.location.hash; 
        if(currentHash.length>0){
            const activeRoute =  this.routes.find(x=>x.isActive(currentHash));
            if(activeRoute){
                this.fetchHTML(activeRoute.htmlName);
            }else{
                this.fetchHTML('error.html');
            }
        }else{
            const defaultRoute = this.routes.find(x=>x.defaultRoute)!;
            this.fetchHTML(defaultRoute.htmlName);
        }
    }
    async fetchHTML(htmlName:string){
        const res = await fetch(`../../views/${htmlName}`);
        const text = await res.text();
        this.root.innerHTML = text;
    }
}