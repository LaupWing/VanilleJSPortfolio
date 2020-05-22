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
        const currentHash:string = window.location.hash; 
        if(currentHash.length>0){
            const activeRoute =  this.routes.find(x=>x.isActive(currentHash));
            console.log(activeRoute);
            if(activeRoute){
                console.log(activeRoute);
            }
        }else{

        }
    }
}