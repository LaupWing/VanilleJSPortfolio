export default class Route{
    constructor(
        public name:string,
        public htmlName: string,
        public defaultRoute: boolean,
    ){
    }
    router(hashedPath: string):boolean{  
        return hashedPath.replace('#', '') === this.name;
    }
}