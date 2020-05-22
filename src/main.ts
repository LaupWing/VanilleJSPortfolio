import Router from './PageHandlers/Router';
import Route from './PageHandlers/Route';
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

// function navigations():void{
//     const allLinks = document.querySelectorAll('#clean nav a') as NodeListOf<HTMLLinkElement>;

//     allLinks.forEach(a=>{
//         console.log(a);
//         a.addEventListener('click', (e)=>{
//             e.preventDefault();
//             const link:string = (<HTMLLinkElement>e.target).href!;
//             const state = {
//                 id: link
//             };
//             history.pushState(state, '', link);
//             const popStateEvent = new PopStateEvent('popstate', { state: state });
//             dispatchEvent(popStateEvent);
//         })
//     })
// }


function init():void{
    setLetterSpacingLogo();
    // navigations();
    const router = new Router([
        new Route('home', 'home.html', true),
    ])
}

// function changeUrl(){
//     console.log(history)
//     console.log('chagnes?')
// }

window.addEventListener('load', init);