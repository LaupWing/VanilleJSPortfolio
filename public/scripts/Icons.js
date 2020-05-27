export default class Icons {
    constructor(active, svgs) {
        this.svgs = svgs;
        this.active = active;
        this.isShow = false;
        this.setActive();
    }
    setActive() {
        this.svgs.forEach(icon => {
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
    toggleShow() {
        if (this.isShow) {
            this.removeShow();
            this.isShow = false;
        }
        else {
            this.showIcons();
            this.isShow = true;
        }
    }
    changeTheme(e) {
        this.active = e.classList[0];
        this.setActive();
        this.removeShow();
        this.isShow = false;
    }
    removeShow() {
        this.svgs.forEach(icon => {
            const showClass = Array.from(icon.classList).find(x => x.includes('show'));
            icon.classList.remove(showClass);
        });
    }
    showIcons() {
        const filtered = Array.from(this.svgs).filter(x => !x.classList.contains('active'));
        filtered.forEach((x, i) => {
            x.classList.add(`show_${i}`);
        });
        const activeStyling = Array.from(this.svgs).find(x => x.classList.contains(this.active));
        activeStyling === null || activeStyling === void 0 ? void 0 : activeStyling.classList.add('show');
    }
}
