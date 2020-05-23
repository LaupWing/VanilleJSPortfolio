import Router from './PageHandlers/Router.js';
import Route from './PageHandlers/Route.js';

function setLetterSpacingLogo():void{
    const logo = document.querySelector('#clean #logo') as HTMLHeadingElement;
    const spans = document.querySelectorAll('#clean #logo span') as NodeListOf<HTMLSpanElement>;
    const logoWidth:number = logo.offsetWidth;
    
    spans.forEach(span=>{
        const diffrence:number = logoWidth - span.offsetWidth; 
        const letters:number = span.textContent?.length!;
        if(diffrence>0){
            span.style.letterSpacing = `${diffrence/letters}px`;
        }
    })
}


function init():void{
    setLetterSpacingLogo();
    new Router([
        new Route('home', 'home.html', true),
        new Route('about', 'about.html'),
    ])
}


window.addEventListener('load', init);