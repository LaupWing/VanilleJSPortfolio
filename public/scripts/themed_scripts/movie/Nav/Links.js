export default class Links {
    constructor(listeners, registerAndApplyListener, links) {
        this.showContent = () => {
            const container = document.querySelector('nav ul');
            const content = document.querySelector('.content');
            const animEnded = () => {
                content === null || content === void 0 ? void 0 : content.classList.add('appear');
                container === null || container === void 0 ? void 0 : container.removeEventListener('animationend', animEnded);
            };
            container === null || container === void 0 ? void 0 : container.addEventListener('animationend', animEnded);
            container === null || container === void 0 ? void 0 : container.classList.add('disappear');
        };
        this.registerAndApplyListener = registerAndApplyListener;
        this.links = links;
        this.listeners = listeners;
        this.init();
    }
    init() {
        this.links.forEach(link => {
            this.registerAndApplyListener({
                element: link,
                type: 'click',
                referenceFunction: this.showContent
            });
        });
    }
}
