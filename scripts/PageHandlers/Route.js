var Route = /** @class */ (function () {
    function Route(name, htmlName, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.defaultRoute = defaultRoute;
    }
    Route.prototype.router = function (hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    };
    return Route;
}());
export default Route;
