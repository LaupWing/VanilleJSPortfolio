import Theme from '../Theme.js';
export default class ThreeD extends Theme {
    constructor() {
        super();
    }
    projects() {
        const projects = document.querySelectorAll('.project');
        projects[0].classList.add('active');
    }
}
