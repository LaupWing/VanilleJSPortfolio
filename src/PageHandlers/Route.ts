export default class Route{
    constructor(
        public name:string,
        public htmlName: string,
        public defaultRoute: boolean = false,
    ){
    }
    isActive(hashedPath: string):boolean{ 
        console.log(hashedPath, this.name) 
        return hashedPath.substr(1).replace('#', '') === this.name;
    }
}