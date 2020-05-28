import Theme from '../Theme.js';

export default class ThreeD extends Theme{
    constructor(){
        super();
    }
    projects(){
        const projects = document.querySelectorAll('.project') as NodeListOf<HTMLDivElement>;
        projects[0].classList.add('active');
    }
}