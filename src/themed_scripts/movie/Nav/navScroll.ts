import colorSchemes from '../colorSchemes/colorSchemes.js';

let initialCoords:null|coords[]= null;
interface coords{
    element: HTMLElement,
    left: number
}

export default function navScroll(e:MouseEvent){
    if(!initialCoords){
        initialCoords = Array
            .from(document.querySelectorAll('nav li'))
            .map(x=>{
                return{
                    element: x as HTMLElement,
                    left: x.getBoundingClientRect().left
                }
            })
    }
    const nav = document.querySelector('nav ul') as HTMLElement;
    const target = e.target as HTMLElement;
    const li = target.closest('li') as HTMLLIElement;
    const viewWidth = window.innerWidth;
    const {width} = li.getBoundingClientRect();
    const left = initialCoords.find(x=>x.element === li)!.left;
    const offset = (viewWidth/100) * (li.textContent?.trim().length as number)-1
    nav.style.transform = `translateX(${(((viewWidth/2)-(width/2)) - left)-offset}px)`;
    const ul = document.querySelector('nav ul') as HTMLUListElement;
    const applyLiStyling = ()=>{
        Array
            .from(document.querySelectorAll('nav li'))
            .forEach(x=>x.classList.remove('active'));
        li.classList.add('active');
        changeCssVars(li);
        ul.removeEventListener('transitionend', applyLiStyling);
    }
    ul.addEventListener('transitionend', applyLiStyling);
}

function changeCssVars(li:HTMLLIElement){
    const lis = Array.from(document.querySelectorAll('nav li'));
    const scheme = colorSchemes[lis.indexOf(li)]
    const container = document.getElementById('movie');
    container?.style.setProperty('--highlight-color', scheme['--highlight-color']);
    container?.style.setProperty('--background-color', scheme['--background-color']);
    container?.style.setProperty('--main-font-color', scheme['--main-font-color']);
}