import Theme from '../Theme.js';

export default class Movie extends Theme{
    body: HTMLBodyElement;
    menu: Boolean;
    constructor(){
        super(
            'movie',
            {
                '--background-color': '#E1DCCD',
                '--highlight-color': '#A3AA97',
                '--main-font-color': '#A3AA97'
            }
        );
        this.body = document.getElementById('threed') as HTMLBodyElement;
        this.menu = false;
        this.init();
    }
    init(){
        console.log(this);
    }
}