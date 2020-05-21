"use strict";
function setLetterSpacingLogo() {
    var logo = document.querySelector('#clean #logo');
    var spans = document.querySelectorAll('#clean #logo span');
    var logoWidth = logo.offsetWidth;
    spans.forEach(function (span) {
        var _a;
        var diffrence = logoWidth - span.offsetWidth;
        var letters = (_a = span.textContent) === null || _a === void 0 ? void 0 : _a.length;
        if (diffrence > 0) {
            span.style.letterSpacing = diffrence / letters + "px";
        }
    });
}
function navigations() {
    var allLinks = document.querySelectorAll('#clean nav a');
    allLinks.forEach(function (a) {
        console.log(a);
        a.addEventListener('click', function (e) {
            e.preventDefault();
            var link = e.target.href;
            var state = {
                id: link
            };
            history.pushState(state, '', link);
            var popStateEvent = new PopStateEvent('popstate', { state: state });
            dispatchEvent(popStateEvent);
        });
    });
}
function init() {
    console.log(history);
    setLetterSpacingLogo();
    navigations();
}
function changeUrl() {
    console.log(history);
    console.log('chagnes?');
}
console.log(location.origin);
window.history.replaceState({ id: '/' }, '', location.origin);
window.addEventListener('load', init);
window.addEventListener('popstate', changeUrl);
