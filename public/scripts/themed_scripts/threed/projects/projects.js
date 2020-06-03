import getProminentColor from '../../../utils/getProminentColor.js';
export default class Projects {
    constructor(listeners, body) {
        this.projects = document.querySelectorAll('.project');
        this.activeProject = null;
        this.body = body;
        this.current = 0;
        this.projectListeners = [];
        this.listeners = listeners;
        this.init();
    }
    init() {
        this.setActiveProject();
        const description = this.activeProject.querySelector('.project-info p');
        this.addListener({
            element: description,
            type: 'animationend',
            referenceFunction: this.descriptionAnimEnded.bind(this)
        });
        description === null || description === void 0 ? void 0 : description.addEventListener('animationend', this.descriptionAnimEnded.bind(this));
    }
    setActiveProject() {
        this.projects.forEach(project => project.classList.remove('active'));
        this.activeProject = this.projects[this.current];
        console.log(this.activeProject);
        this.activeProject.classList.add('active');
    }
    move(e) {
        const ax = -(window.innerWidth / 2 - e.pageX) / 20;
        const ay = (window.innerHeight / 2 - e.pageY) / 10;
        this.activeProject.style.transform = "rotateY(" + ax + "deg) rotateX(" + ay + "deg)";
    }
    descriptionAnimEnded() {
        const color = getProminentColor(this.activeProject.querySelector('img'));
        this.body.style.setProperty('--background-color', `rgb(${color.r},${color.g},${color.b})`);
        this.addListener({
            element: document,
            type: 'mousemove',
            referenceFunction: this.move.bind(this)
        });
        document.addEventListener('mousemove', this.move.bind(this));
    }
    addListener(listener) {
        this.projectListeners.push(listener);
        this.listeners.push(listener);
    }
}
