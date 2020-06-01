import Theme from '../Theme.js';
import getProminentColor from '../../utils/getProminentColor.js';
export default class ThreeD extends Theme {
    constructor() {
        super();
        this.body = document.getElementById('threed');
    }
    projects() {
        const projects = document.querySelectorAll('.project');
        const activeProject = projects[0];
        activeProject.classList.add('active');
        const move = (e) => {
            const ax = -(window.innerWidth / 2 - e.pageX) / 20;
            const ay = (window.innerHeight / 2 - e.pageY) / 10;
            activeProject.style.transform = "rotateY(" + ax + "deg) rotateX(" + ay + "deg)";
        };
        const description = activeProject.querySelector('.project-info p');
        description === null || description === void 0 ? void 0 : description.addEventListener('animationend', () => {
            const color = getProminentColor(activeProject.querySelector('img'));
            this.body.style.setProperty('--background-color', `rgb(${color.r},${color.g},${color.b})`);
            this.listeners.push({
                element: document,
                type: 'mousemove',
                referenceFunction: move
            });
            document.addEventListener('mousemove', move);
        });
    }
}
