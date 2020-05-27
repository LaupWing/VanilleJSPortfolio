export default class SwitchTemplate {
    constructor(active) {
        this.svgs = document.querySelectorAll('.icons svg');
        this.active = active;
        this.svgs.forEach(svg => svg.addEventListener('click', this.handleClick.bind(this)));
    }
    handleClick(e) {
        alert('You havent override the handleClick method in from this class');
    }
}
