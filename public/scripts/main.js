import Router from './PageHandlers/Router.js';
import Route from './PageHandlers/Route.js';
import TemplateHandler from './TemplateHandler.js';
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
    // const clean = new Clean();
    const templateHandler = new TemplateHandler('clean');
    new Icons('clean');
    new Router([
        new Route('home', 'home.html', true),
        new Route('about', 'about.html'),
        new Route('projects', 'projects.html'),
        new Route('contact', 'contact.html'),
    ], () => {
        // NEED TO REMOVE ALL LISTENERES BEFORE REAPPLYING TO NEW TEMPLATE SCRIPT
        templateHandler.templateObj.applyListenerContainer();
        // clean.applyListenerContainer();
    });
}
window.addEventListener('load', init);
