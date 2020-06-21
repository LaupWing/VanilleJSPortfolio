import Theme from '../Theme.js';
import navScroll from './Nav/navScroll.js';
import colorSchemes from './colorSchemes/colorSchemes.js';
export default class Movie extends Theme {
    constructor() {
        super('movie', colorSchemes[0]);
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
        });
    }
}
