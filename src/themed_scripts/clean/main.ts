export default class Clean{
    links: NodeListOf<HTMLLinkElement>;
    constructor(){
        this.links = document.querySelectorAll('#clean nav a');
        this.links.forEach(link=>{
            link.addEventListener('click', this.handleLink);
        })
    }
    handleLink(e:Event){
        e.preventDefault();
        window.location.href = (e.target as HTMLLinkElement).href;
        console.log((e.target as HTMLLinkElement).href);
    }
}