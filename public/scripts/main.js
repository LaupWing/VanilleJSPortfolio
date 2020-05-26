import Router from './PageHandlers/Router.js';
import Route from './PageHandlers/Route.js';
import Clean from './themed_scripts/clean/main.js';
import Icons from './Icons.js';
function setLetterSpacingLogo() {
    const logo = document.querySelector('#logo');
    const spans = document.querySelectorAll('#logo span');
    const logoWidth = logo.offsetWidth;
    spans.forEach(span => {
        var _a;
        const diffrence = logoWidth - span.offsetWidth;
        const letters = (_a = span.textContent) === null || _a === void 0 ? void 0 : _a.length;
        if (diffrence > 0) {
            span.style.letterSpacing = `${diffrence / letters}px`;
        }
    });
}
function init() {
    setLetterSpacingLogo();
    const Template = new Clean();
    new Icons('clean');
    new Router([
        new Route('home', 'home.html', true),
        new Route('about', 'about.html'),
        new Route('projects', 'projects.html'),
        new Route('contact', 'contact.html'),
    ], () => {
        Template.applyListenerContainer();
    });
}
window.addEventListener('load', init);
