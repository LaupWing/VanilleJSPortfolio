import getProminentColor from '../../../utils/getProminentColor.js';
export default class Projects {
    constructor(listeners, body) {
        this.move = (e) => {
            const ax = -(window.innerWidth / 2 - e.pageX) / 20;
            const ay = (window.innerHeight / 2 - e.pageY) / 10;
            this.activeProject.style.transform = "rotateY(" + ax + "deg) rotateX(" + ay + "deg)";
        };
        this.projectSwitcher = (e) => {
            const targetClass = e.target.classList[0];
            this.projects[this.current].classList.add('dissappear');
            if (targetClass === 'next') {
                if (this.current < this.projects.length) {
                    this.current += 1;
                }
            }
            else {
                if (this.current > 0) {
                    this.current -= 1;
                }
            }
        };
        this.descriptionAnimEnded = () => {
            const color = getProminentColor(this.activeProject.querySelector('img'));
            this.body.style.setProperty('--background-color', `rgb(${color.r},${color.g},${color.b})`);
            this.addListener({
                element: document,
                type: 'mousemove',
                referenceFunction: this.move
            });
        };
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
            referenceFunction: this.descriptionAnimEnded
        });
        this.buttonEvents();
    }
    setActiveProject() {
        this.projects.forEach(project => project.classList.remove('active'));
        this.activeProject = this.projects[this.current];
        this.activeProject.classList.add('active');
    }
    buttonEvents() {
        const prevBtn = this.body.querySelector('button.prev');
        const nextBtn = this.body.querySelector('button.next');
        this.addListener({
            element: prevBtn,
            type: 'click',
            referenceFunction: this.projectSwitcher
        });
        this.addListener({
            element: nextBtn,
            type: 'click',
            referenceFunction: this.projectSwitcher
        });
    }
    addListener(listener) {
        listener.element.addEventListener(listener.type, listener.referenceFunction);
        this.projectListeners.push(listener);
        this.listeners.push(listener);
    }
}
