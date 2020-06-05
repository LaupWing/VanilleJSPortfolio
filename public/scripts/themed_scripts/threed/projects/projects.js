import getProminentColor from '../../../utils/getProminentColor.js';
import invertColor from '../../../utils/invertColor.js';
export default class Projects {
    constructor(listeners, body) {
        this.move = (e) => {
            const ax = -(window.innerWidth / 2 - e.pageX) / 20;
            const ay = (window.innerHeight / 2 - e.pageY) / 10;
            this.activeProject.style.transform = "rotateY(" + ax + "deg) rotateX(" + ay + "deg)";
        };
        this.projectAnimEnded = (e) => {
            const target = e.target;
            if (target.classList.contains('project')) {
                target.classList.remove('active');
                target.classList.remove('dissappear');
                target.removeAttribute('style');
                const description = target.querySelector('.project-info p');
                this.removeListener(description);
                this.removeListener(document);
                this.setActiveProject();
                this.descriptionAnimEndedEvent();
            }
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
            const invertedColor = invertColor(color);
            this.body.style.setProperty('--background-color', `rgb(${color.r},${color.g},${color.b})`);
            this.body.style.setProperty('--highlight-color', invertedColor);
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
        this.descriptionAnimEndedEvent();
        this.buttonEvents();
        this.projectAnimEndedEvents();
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
    removeListener(el) {
        const listenerObjs = this.listeners.filter(l => l.element === el);
        this.listeners = this.listeners.filter(l => l.element !== el);
        this.projectListeners = this.projectListeners.filter(l => l.element !== el);
        listenerObjs.forEach(({ element, type, referenceFunction }) => {
            element.removeEventListener(type, referenceFunction);
        });
    }
    projectAnimEndedEvents() {
        this.projects.forEach(project => {
            this.addListener({
                element: project,
                type: 'animationend',
                referenceFunction: this.projectAnimEnded
            });
        });
    }
    descriptionAnimEndedEvent() {
        const description = this.activeProject.querySelector('.project-info p');
        this.addListener({
            element: description,
            type: 'animationend',
            referenceFunction: this.descriptionAnimEnded
        });
    }
    addListener(listener) {
        listener.element.addEventListener(listener.type, listener.referenceFunction);
        this.projectListeners.push(listener);
        this.listeners.push(listener);
    }
}
