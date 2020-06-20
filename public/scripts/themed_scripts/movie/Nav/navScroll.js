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
    const nav = document.querySelector('nav ul');
    const target = e.target;
    const li = target.closest('li');
    const viewWidth = window.innerWidth;
    const { width } = li.getBoundingClientRect();
    const left = initialCoords.find(x => x.element === li).left;
    nav.style.transform = `translateX(${((viewWidth / 2) - (width / 2)) - left}px)`;
}
