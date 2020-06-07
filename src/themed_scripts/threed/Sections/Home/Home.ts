import {isListener} from '../../../../interfaces/interfaces.js';
import Sections from '../Sections.js';

export default class Home extends Sections{
    constructor(listeners:isListener[], body:HTMLBodyElement){
        super(listeners, body);
        this.init();
    }
    init(){
    }
}