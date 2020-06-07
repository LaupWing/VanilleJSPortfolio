import Sections from '../Sections.js';
export default class Projects extends Sections {
    constructor(listeners, body) {
        super(listeners, body);
        this.projectAnimEnded = (e) => {
            const target = e.target;
            if (target.classList.contains('project')) {
                target.classList.remove('active');
                target.classList.remove('dissappear');
                target.removeAttribute('style');
                const description = target.querySelector('.project-info p');
                this.removeElListener(description);
                this.removeElListener(document);
                this.setActiveProject();
                this.descriptionAnimEndedEvent();
                this.disableButtons();
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
            this.setCssVar();
            this.addListener({
                element: document,
                type: 'mousemove',
                referenceFunction: this.move
            });
        };
        this.projects = document.querySelectorAll('.project');
        this.activeProject = null;
        this.current = 0;
        this.init();
    }
    init() {
        this.setActiveProject();
        this.descriptionAnimEndedEvent();
        this.buttonEvents();
        this.projectAnimEndedEvents();
        this.disableButtons();
    }
    setActiveProject() {
        this.projects.forEach(project => project.classList.remove('active'));
        this.activeProject = this.projects[this.current];
        this.activeProject.classList.add('active');
        this.movingContainer = this.activeProject;
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
    projectAnimEndedEvents() {
        this.projects.forEach(project => {
            this.addListener({
                element: project,
                type: 'animationend',
                referenceFunction: this.projectAnimEnded
            });
        });
    }
    disableButtons() {
        const prevBtn = this.body.querySelector('button.prev');
        const nextBtn = this.body.querySelector('button.next');
        prevBtn.classList.remove('disabled');
        nextBtn.classList.remove('disabled');
        if (this.current === 0) {
            prevBtn.classList.add('disabled');
        }
        if (this.current === (this.projects.length - 1)) {
            nextBtn.classList.add('disabled');
        }
    }
    descriptionAnimEndedEvent() {
        const description = this.activeProject.querySelector('.project-info p');
        this.addListener({
            element: description,
            type: 'animationend',
            referenceFunction: this.descriptionAnimEnded
        });
    }
}
