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
        li.classList.add('active');
        ul.removeEventListener('transitionend', applyLiStyling);
    };
    ul.addEventListener('transitionend', applyLiStyling);
}
