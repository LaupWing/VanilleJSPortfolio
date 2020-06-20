import {isListener} from '../../../../interfaces/interfaces.js';
import Sections from '../Sections.js';

export default class Home extends Sections{
    constructor(listeners:isListener[], body:HTMLBodyElement){
        super(listeners, body);
        this.movingContainer = document.querySelector('div.content');
        this.init();
    }
    init(){
        this.addListener({
           element: document,
           type: 'mousemove',
           referenceFunction: this.move
        });
    }
}