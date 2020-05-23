export default class Clean{
    links: NodeListOf<HTMLLinkElement>;
    container: HTMLDivElement;
    constructor(){
        this.links = document.querySelectorAll('#clean nav a');
        this.container = document.querySelector('#clean .content') as HTMLDivElement;
        console.log(this.container);
        this.links.forEach(link=>{
            link.addEventListener('click', this.handleLink);
        });
        this.container.addEventListener('animationend', (e)=>{
            console.log(e);
        });
        
    }
    handleLink(e:Event){
        e.preventDefault();
        window.location.href = (e.target as HTMLLinkElement).href;
        console.log((e.target as HTMLLinkElement).href);
    }
}