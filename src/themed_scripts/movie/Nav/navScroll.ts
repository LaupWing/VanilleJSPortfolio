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
    
    Array
        .from(document.querySelectorAll('nav li'))
        .forEach(x=>x.classList.remove('active'));
        
    const nav = document.querySelector('nav ul') as HTMLElement;
    const target = e.target as HTMLElement;
    const li = target.closest('li') as HTMLLIElement;
    const viewWidth = window.innerWidth;
    const {width} = li.getBoundingClientRect();
    const left = initialCoords.find(x=>x.element === li)!.left;
    nav.style.transform = `translateX(${((viewWidth/2)-(width/2)) - left}px)`;
    const ul = document.querySelector('nav ul') as HTMLUListElement;
    const applyLiStyling = ()=>{
        li.classList.add('active');
        ul.removeEventListener('transitionend', applyLiStyling);
    }
    ul.addEventListener('transitionend', applyLiStyling);
}