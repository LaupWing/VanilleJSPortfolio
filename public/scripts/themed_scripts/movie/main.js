import Theme from '../Theme.js';
import navScroll from './Nav/navScroll.js';
import colorSchemes from './colorSchemes/colorSchemes.js';
export default class Movie extends Theme {
    constructor() {
        super('movie', colorSchemes[0], false);
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
        this.lis = document.querySelectorAll('nav ul li');
        this.body = document.getElementById('threed');
        this.menu = false;
        this.init();
        this.colorsSchemes = colorSchemes;
    }
    init() {
        this.lis.forEach(li => {
            this.registerAndApplyListener({
                element: li,
                type: 'mouseover',
                referenceFunction: navScroll
            });
            this.registerAndApplyListener({
                element: li,
                type: 'click',
                referenceFunction: this.showContent
            });
        });
    }
}
