var Router = /** @class */ (function () {
    function Router(routes) {
        var _this = this;
        this.root = document.getElementById('app');
        this.routes = routes;
        window.addEventListener('hashchange', function (e) {
            _this.hashChanged();
        });
        this.hashChanged();
    }
    Router.prototype.hashChanged = function () {
        console.log(window.location.hash);
    };
    return Router;
}());
export default Router;
