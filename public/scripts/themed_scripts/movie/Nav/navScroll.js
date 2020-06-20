import colorSchemes from '../colorSchemes/colorSchemes.js';
let initialCoords = null;
export default function navScroll(e) {
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
    nav.style.transform = `translateX(${((viewWidth / 2) - (width / 2)) - left}px)`;
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
