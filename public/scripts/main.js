import Router from './PageHandlers/Router.js';
import Route from './PageHandlers/Route.js';
function setLetterSpacingLogo() {
    const logo = document.querySelector('#clean #logo');
    const spans = document.querySelectorAll('#clean #logo span');
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
    new Router([
        new Route('home', 'home.html', true),
        new Route('about', 'about.html'),
    ]);
}
window.addEventListener('load', init);
