import Route from './Route.js';

export default class Router{
    root:HTMLDivElement;
    routes:Route[];
    cb: Function;

    constructor(routes:Route[], cb:Function){
        this.root = document.getElementById('app') as HTMLDivElement;
        this.routes = routes;
        this.cb = cb;
        window.addEventListener('hashchange', (e)=>{
            this.checkHash();
        });
        this.checkHash();
    }    
    checkHash():void{
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
        this.cb();
    }
}