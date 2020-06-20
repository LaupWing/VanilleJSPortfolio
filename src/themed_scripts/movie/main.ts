import Theme from '../Theme.js';
import navScroll from './Nav/navScroll.js'

export default class Movie extends Theme{
    body: HTMLBodyElement;
    menu: Boolean;
    lis: NodeListOf <HTMLLIElement>;
    constructor(){
        super(
            'movie',
            {
                '--background-color': '#E1DCCD',
                '--highlight-color': '#A3AA97',
                '--main-font-color': '#A3AA97'
            }
        );
        this.lis = document.querySelectorAll('nav ul li') as NodeListOf <HTMLLIElement>;
        this.body = document.getElementById('threed') as HTMLBodyElement;
        this.menu = false;
        this.init();
    }
    init(){
        this.lis.forEach(li=>{
            this.registerAndApplyListener({
                element: li,
                type: 'mouseover',
                referenceFunction:navScroll 
            });
        });
    }
}