import Theme from '../Theme.js';
import navScroll from './Nav/navScroll.js'

export default class Movie extends Theme{
    body: HTMLBodyElement;
    menu: Boolean;
    nav: HTMLUListElement;
    constructor(){
        super(
            'movie',
            {
                '--background-color': '#E1DCCD',
                '--highlight-color': '#A3AA97',
                '--main-font-color': '#A3AA97'
            }
        );
        this.nav = document.querySelector('nav ul') as HTMLUListElement;
        this.body = document.getElementById('threed') as HTMLBodyElement;
        this.menu = false;
        this.init();
    }
    init(){
        this.registerAndApplyListener({
            element: this.nav,
            type: 'mousemove',
            referenceFunction:navScroll 
        });
    }
}