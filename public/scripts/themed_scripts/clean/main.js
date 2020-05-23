export default class Clean {
    constructor() {
        this.links = document.querySelectorAll('#clean nav a');
        this.container = document.querySelector('#clean .content');
        console.log(this.container);
        this.links.forEach(link => {
            link.addEventListener('click', this.handleLink);
        });
        this.container.addEventListener('animationend', (e) => {
            console.log(e);
        });
    }
    handleLink(e) {
        e.preventDefault();
        window.location.href = e.target.href;
        console.log(e.target.href);
    }
}
