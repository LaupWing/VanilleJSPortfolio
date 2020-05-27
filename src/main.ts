import Router from './PageHandlers/Router.js';
import Route from './PageHandlers/Route.js';
import SwitchTemplate from './SwitchTemplate.js';

function setLetterSpacingLogo():void{
    const logo = document.querySelector('#logo') as HTMLHeadingElement;
    const spans = document.querySelectorAll('#logo span') as NodeListOf<HTMLSpanElement>;
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
    const switchTemplate = new SwitchTemplate('clean');
    new Router([
        new Route('home', 'home.html', true),
        new Route('about', 'about.html'),
        new Route('projects', 'projects.html'),
        new Route('contact', 'contact.html'),
    ],()=>{
        switchTemplate.templateHandler!.templateObj!.applyListenerContainer();
    })
}


window.addEventListener('load', init);