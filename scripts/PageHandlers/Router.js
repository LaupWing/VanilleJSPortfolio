export default class Router {
    constructor(routes) {
        this.root = document.getElementById('app');
        this.routes = routes;
        window.addEventListener('hashchange', (e) => {
            this.hashChanged();
        });
        this.hashChanged();
    }
    hashChanged() {
        const currentHash = window.location.hash;
        if (currentHash.length > 0) {
            const activeRoute = this.routes.find(x => x.isActive(currentHash));
            console.log(activeRoute);
            if (activeRoute) {
                console.log(activeRoute);
            }
        }
        else {
        }
    }
}
