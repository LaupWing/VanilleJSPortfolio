import Theme from '../Theme.js';
export default class ThreeD extends Theme {
    constructor() {
        super();
    }
    projects() {
        const projects = document.querySelectorAll('.project');
        const activeProject = projects[0];
        activeProject.classList.add('active');
    }
}
