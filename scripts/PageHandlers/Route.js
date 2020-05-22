export default class Route {
    constructor(name, htmlName, defaultRoute = false) {
        this.name = name;
        this.htmlName = htmlName;
        this.defaultRoute = defaultRoute;
    }
    isActive(hashedPath) {
        console.log(hashedPath, this.name);
        return hashedPath.substr(1).replace('#', '') === this.name;
    }
}
