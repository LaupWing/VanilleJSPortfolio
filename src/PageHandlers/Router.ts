import Route from './Route.js';

export default class Router{
    root:HTMLDivElement;
    routes:Route[];

    constructor(routes:Route[]){
        this.root = document.getElementById('app') as HTMLDivElement;
        this.routes = routes;
        window.addEventListener('hashchange', (e)=>{
            this.hashChanged();
        });
        this.hashChanged();
    }    
    hashChanged():void{
        console.log(window.location.hash);
    }
}