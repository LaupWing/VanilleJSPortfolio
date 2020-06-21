import colorSchemes from '../colorSchemes/colorSchemes.js';
let initialCoords = null;
export default function navScroll(e) {
    var _a;
    if (!initialCoords) {
        initialCoords = Array
            .from(document.querySelectorAll('nav li'))
            .map(x => {
            return {
                element: x,
                left: x.getBoundingClientRect().left
            };
        });
    }
    Array
        .from(document.querySelectorAll('nav li'))
        .forEach(x => x.classList.remove('active'));
    const nav = document.querySelector('nav ul');
    const target = e.target;
    const li = target.closest('li');
    const viewWidth = window.innerWidth;
    const { width } = li.getBoundingClientRect();
    const left = initialCoords.find(x => x.element === li).left;
    const offset = (viewWidth / 100) * ((_a = li.textContent) === null || _a === void 0 ? void 0 : _a.trim().length) - 1;
    nav.style.transform = `translateX(${(((viewWidth / 2) - (width / 2)) - left) - offset}px)`;
    const ul = document.querySelector('nav ul');
    const applyLiStyling = () => {
        Array
            .from(document.querySelectorAll('nav li'))
            .forEach(x => x.classList.remove('active'));
        li.classList.add('active');
        changeCssVars(li);
        ul.removeEventListener('transitionend', applyLiStyling);
    };
    ul.addEventListener('transitionend', applyLiStyling);
}
function changeCssVars(li) {
    const lis = Array.from(document.querySelectorAll('nav li'));
    const scheme = colorSchemes[lis.indexOf(li)];
    const container = document.getElementById('movie');
    container === null || container === void 0 ? void 0 : container.style.setProperty('--highlight-color', scheme['--highlight-color']);
    container === null || container === void 0 ? void 0 : container.style.setProperty('--background-color', scheme['--background-color']);
    container === null || container === void 0 ? void 0 : container.style.setProperty('--main-font-color', scheme['--main-font-color']);
}
