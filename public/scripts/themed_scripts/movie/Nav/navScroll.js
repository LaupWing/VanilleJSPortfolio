export default function navScroll(e) {
    const nav = document.querySelector('nav ul');
    const target = e.target;
    const viewWidth = window.innerWidth;
    const targetWidth = target.getBoundingClientRect().width;
    nav.style.transform = `translateX(${(viewWidth / 2) - (targetWidth / 2)}px)`;
}
