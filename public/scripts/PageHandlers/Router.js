var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class Router {
    constructor(routes, cb) {
        this.root = document.getElementById('app');
        this.routes = routes;
        this.cb = cb;
        window.addEventListener('hashchange', (e) => {
            this.checkHash();
        });
        this.checkHash();
    }
    checkHash() {
        const currentHash = window.location.hash;
        if (currentHash.length > 0) {
            const activeRoute = this.routes.find(x => x.isActive(currentHash));
            if (activeRoute) {
                this.fetchHTML(activeRoute.htmlName);
            }
            else {
                this.fetchHTML('error.html');
            }
        }
        else {
            const defaultRoute = this.routes.find(x => x.defaultRoute);
            this.fetchHTML(defaultRoute.htmlName);
        }
    }
    fetchHTML(htmlName) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`../../views/${htmlName}`);
            const text = yield res.text();
            this.root.innerHTML = text;
            this.cb();
        });
    }
}
