import Router from './PageHandlers/Router';
import Route from './PageHandlers/Route';
function setLetterSpacingLogo() {
    var logo = document.querySelector('#clean #logo');
    var spans = document.querySelectorAll('#clean #logo span');
    var logoWidth = logo.offsetWidth;
    spans.forEach(function (span) {
        var _a;
        var diffrence = logoWidth - span.offsetWidth;
        var letters = (_a = span.textContent) === null || _a === void 0 ? void 0 : _a.length;
        if (diffrence > 0) {
            span.style.letterSpacing = diffrence / letters + "px";
        }
    });
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
function init() {
    setLetterSpacingLogo();
    // navigations();
    var router = new Router([
        new Route('home', 'home.html', true),
        new Route('home', 'home.html', true),
    ]);
}
// function changeUrl(){
//     console.log(history)
//     console.log('chagnes?')
// }
window.addEventListener('load', init);
