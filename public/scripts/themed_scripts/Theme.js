export default class Theme {
    constructor(theme, globalCssVars) {
        this.handleLink = (e) => {
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
        };
        this.handleAnimEndContainer = (e) => {
            const el = e.target;
            if (el.classList.contains('appear')) {
                el.classList.remove('appear');
                this.toggleLinks('remove');
            }
            else {
                window.location.href = this.goto;
            }
        };
        this.links = document.querySelectorAll('nav ul a');
        this.container = document.querySelector('#app .content');
        this.goto = window.location.href;
        this.listeners = [];
        this.theme = theme;
        this.applyListenerLinks();
        this.setGloblalCSSVars(globalCssVars);
    }
    setGloblalCSSVars(globalCssVars = {}) {
        const container = document.getElementById(this.theme);
        for (let key in globalCssVars) {
            container === null || container === void 0 ? void 0 : container.style.setProperty(key, globalCssVars[key]);
        }
    }
    toggleLinks(state) {
        if (state === 'add') {
            this.links.forEach(link => link.classList.add('disabled'));
        }
        else {
            this.links.forEach(link => link.classList.remove('disabled'));
        }
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
                type: 'click',
                referenceFunction: this.handleLink
            });
            link.addEventListener('click', this.handleLink);
        });
    }
    applyListenerContainer() {
        this.container = document.querySelector('#app .content');
        this.listeners.push({
            element: this.container,
            type: 'animationend',
            referenceFunction: this.handleAnimEndContainer
        });
        this.container.addEventListener('animationend', this.handleAnimEndContainer);
    }
}
