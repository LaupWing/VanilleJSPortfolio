import Theme from '../Theme.js';

export default class ThreeD extends Theme{
    body: HTMLBodyElement;
    constructor(){
        super(
            'threed',
            {
                '--background-color': '#111111',
                '--highlight-color': '#F082AC',
                '--main-font-color': 'white'
            }
        );
        this.body = document.getElementById('threed') as HTMLBodyElement;
    }
}