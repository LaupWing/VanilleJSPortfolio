export default class Icons {
    constructor(active) {
        this.icons = document.querySelectorAll('.icons svg');
        this.active = active;
        this.isShow = false;
        this.setActive();
        this.icons.forEach(icon => icon.addEventListener('click', this.handleClick.bind(this)));
    }
    setActive() {
        this.icons.forEach(icon => {
            icon.classList.remove('active');
            if (icon.classList.contains(this.active)) {
                icon.classList.add('active');
            }
        });
    }
    handleClick(e) {
        const clicked = e.target;
        if (clicked.classList.contains(this.active)) {
            if (this.isShow) {
                this.removeShow();
                this.isShow = false;
            }
            else {
                this.changeTemplate();
                this.isShow = true;
            }
        }
    }
    removeShow() {
        this.icons.forEach(icon => {
            const showClass = Array.from(icon.classList).find(x => x.includes('show'));
            icon.classList.remove(showClass);
        });
    }
    changeTemplate() {
        const filtered = Array.from(this.icons).filter(x => !x.classList.contains('active'));
        filtered.forEach((x, i) => {
            x.classList.add(`show_${i}`);
        });
        const activeStyling = Array.from(this.icons).find(x => x.classList.contains(this.active));
        activeStyling === null || activeStyling === void 0 ? void 0 : activeStyling.classList.add('show');
    }
}
