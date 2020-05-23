export default class Clean {
    constructor() {
        this.links = document.querySelectorAll('#clean nav a');
        this.links.forEach(link => {
            link.addEventListener('click', this.handleLink);
        });
    }
    handleLink(e) {
        e.preventDefault();
        window.location.href = e.target.href;
        console.log(e.target.href);
    }
}
