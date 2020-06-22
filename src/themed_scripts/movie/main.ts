import Theme from '../Theme.js';
import navScroll from './Nav/navScroll.js';
import colorSchemes from './colorSchemes/colorSchemes.js';
import Links from './Nav/Links.js';
type ListElements = NodeListOf<HTMLLinkElement>; 

export default class Movie extends Theme{
    body: HTMLBodyElement;
    menu: Boolean;
    lis: ListElements;
    colorsSchemes:Object[];

    constructor(){
        super(
            'movie',
            colorSchemes[0],
            false
        );
        this.lis = document.querySelectorAll('nav ul li') as ListElements;
        this.body = document.getElementById('threed') as HTMLBodyElement;
        this.menu = false;
        this.init();
        this.colorsSchemes = colorSchemes;
        new Links(this.listeners, this.registerAndApplyListener, this.lis);
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