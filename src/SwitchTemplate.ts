export default class SwitchTemplate{
    icons: NodeListOf<SVGElement>;
    active: string;
    constructor(active:string){
        this.icons = document.querySelectorAll('.icons svg');
        this.active = active;
        this.icons.forEach(icon=>icon.addEventListener('click', this.handleClick.bind(this)))
    }
    handleClick(){
        alert('You havent override the handleClick method in from this class');
    }
}