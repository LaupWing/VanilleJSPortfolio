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
                document.body.id = this.active;
                icon.classList.add('active');
            }
        });
    }
    handleClick(e) {
        const target = e.target;
        const svg = target.closest('svg');
        if (svg.classList.contains(this.active)) {
            if (this.isShow) {
                this.removeShow();
                this.isShow = false;
            }
            else {
                this.showIcons();
                this.isShow = true;
            }
        }
        else {
            this.changeTheme(svg);
        }
    }
    changeTheme(e) {
        this.active = e.classList[0];
        this.setActive();
        this.removeShow();
        this.isShow = false;
    }
    removeShow() {
        this.icons.forEach(icon => {
            const showClass = Array.from(icon.classList).find(x => x.includes('show'));
            icon.classList.remove(showClass);
        });
    }
    showIcons() {
        const filtered = Array.from(this.icons).filter(x => !x.classList.contains('active'));
        filtered.forEach((x, i) => {
            x.classList.add(`show_${i}`);
        });
        const activeStyling = Array.from(this.icons).find(x => x.classList.contains(this.active));
        activeStyling === null || activeStyling === void 0 ? void 0 : activeStyling.classList.add('show');
    }
}
