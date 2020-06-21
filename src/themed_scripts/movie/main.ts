import Theme from '../Theme.js';
import navScroll from './Nav/navScroll.js';
import colorSchemes from './colorSchemes/colorSchemes.js';

export default class Movie extends Theme{
    body: HTMLBodyElement;
    menu: Boolean;
    lis: NodeListOf <HTMLLIElement>;
    colorsSchemes:Object[];

    constructor(){
        super(
            'movie',
            colorSchemes[0],
            false
        );
        this.lis = document.querySelectorAll('nav ul li') as NodeListOf <HTMLLIElement>;
        this.body = document.getElementById('threed') as HTMLBodyElement;
        this.menu = false;
        this.init();
        this.colorsSchemes = colorSchemes;
    }
    init(){
        this.lis.forEach(li=>{
            this.registerAndApplyListener({
                element: li,
                type: 'mouseover',
                referenceFunction:navScroll 
            });
            this.registerAndApplyListener({
                element: li,
                type: 'click',
                referenceFunction: this.showContent 
            });
        });
    }
    showContent = ()=>{
        const container = document.querySelector('nav ul');
        const content = document.querySelector('.content');
        const animEnded = ()=>{
            content?.classList.add('appear');
            container?.removeEventListener('animationend', animEnded);
        }
        container?.addEventListener('animationend', animEnded);
        container?.classList.add('disappear');
    }
}