export default function navScroll(e:MouseEvent){
    const nav = document.querySelector('nav ul') as HTMLElement;
    const target = e.target as HTMLElement;
    const viewWidth = window.innerWidth;
    const targetWidth = target.getBoundingClientRect().width;
    nav.style.transform = `translateX(${(viewWidth/2)-(targetWidth/2)}px)`;
}