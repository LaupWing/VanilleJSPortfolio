import Theme from '../Theme.js';
import navScroll from './Nav/navScroll.js';
import colorSchemes from './colorSchemes/colorSchemes.js';
import Links from './Nav/Links.js';
export default class Movie extends Theme {
    constructor() {
        super('movie', colorSchemes[0], false);
        this.lis = document.querySelectorAll('nav ul li');
        this.body = document.getElementById('threed');
        this.menu = false;
        this.init();
        this.colorsSchemes = colorSchemes;
        new Links(this.listeners, this.registerAndApplyListener, this.lis);
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
