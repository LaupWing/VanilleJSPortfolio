export default class Clean{
    links: NodeListOf<HTMLLinkElement>;
    constructor(){
        this.links = document.querySelectorAll('#clean nav a');
    }
}