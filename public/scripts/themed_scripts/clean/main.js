export default class Clean {
    constructor() {
        this.links = document.querySelectorAll('#clean nav a');
        this.container = document.querySelector('#clean .content');
        this.goto = null;
        this.links.forEach(link => {
            link.addEventListener('click', this.handleLink.bind(this));
        });
        this.container.addEventListener('animationend', (e) => {
            const el = e.target;
            if (el.classList.contains('appear')) {
                el.classList.remove('appear');
            }
            else {
                window.location.href = this.goto;
            }
        });
    }
    handleLink(e) {
        e.preventDefault();
        this.goto = e.target.href;
        this.container.classList.add('dissappear');
    }
}
