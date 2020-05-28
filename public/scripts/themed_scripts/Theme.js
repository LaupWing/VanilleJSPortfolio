export default class Theme {
    constructor() {
        this.links = document.querySelectorAll('nav ul a');
        this.container = document.querySelector('#app .content');
        this.goto = window.location.href;
        this.listeners = [];
        this.applyListenerLinks();
    }
    toggleLinks(state) {
        if (state === 'add') {
            this.links.forEach(link => link.classList.add('disabled'));
        }
        else {
            this.links.forEach(link => link.classList.remove('disabled'));
        }
    }
    handleLink(e) {
        e.preventDefault();
        const clickedLink = e.target;
        const newLocation = clickedLink.href;
        if (this.goto === newLocation) {
            return;
        }
        this.links.forEach(link => link.classList.remove('active'));
        clickedLink.classList.add('active');
        this.goto = newLocation;
        this.container.classList.add('dissappear');
        this.toggleLinks('add');
    }
    applyListenerLinks() {
        this.links.forEach(link => {
            if (window.location.hash.length === 0) {
                if (link.href === `${window.location.origin}/#`) {
                    link.classList.add('active');
                }
            }
            else {
                if (link.href === window.location.href) {
                    link.classList.add('active');
                }
            }
            this.listeners.push({
                element: link,
                type: 'click'
            });
            link.addEventListener('click', this.handleLink.bind(this));
        });
    }
    applyListenerContainer() {
        this.container = document.querySelector('#app .content');
        this.listeners.push({
            element: this.container,
            type: 'animationend'
        });
        this.container.addEventListener('animationend', (e) => {
            const el = e.target;
            if (el.classList.contains('appear')) {
                el.classList.remove('appear');
                this.toggleLinks('remove');
            }
            else {
                window.location.href = this.goto;
            }
        });
    }
}
