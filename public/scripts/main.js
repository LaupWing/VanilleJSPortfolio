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
window.addEventListener('load', setLetterSpacingLogo);
