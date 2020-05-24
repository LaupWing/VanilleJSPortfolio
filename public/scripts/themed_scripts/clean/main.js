export default class Clean {
    constructor() {
        this.links = document.querySelectorAll('#clean nav a');
        this.container = null;
        this.goto = null;
        this.links.forEach(link => {
            link.addEventListener('click', this.handleLink.bind(this));
        });
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
        const newLocation = e.target.href;
        if (this.goto === newLocation) {
            return;
        }
        this.goto = newLocation;
        this.container.classList.add('dissappear');
        this.toggleLinks('add');
    }
    applyListenerContainer() {
        this.container = document.querySelector('#clean .content');
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
