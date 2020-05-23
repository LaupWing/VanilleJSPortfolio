var Router = /** @class */ (function () {
    function Router() {
        window.addEventListener('hashchange', this.router);
    }
    Router.prototype.router = function () {
    };
    return Router;
}());
export default Router;
