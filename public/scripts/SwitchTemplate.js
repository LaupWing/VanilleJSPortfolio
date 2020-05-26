export default class SwitchTemplate {
    constructor(active) {
        this.icons = document.querySelectorAll('.icons svg');
        this.active = active;
        this.icons.forEach(icon => icon.addEventListener('click', this.handleClick.bind(this)));
    }
    handleClick(e) {
        alert('You havent override the handleClick method in from this class');
    }
}
