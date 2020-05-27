

export default class SwitchTemplate{
    svgs: NodeListOf<SVGElement>;
    active: string;
    constructor(active:string){
        this.svgs = document.querySelectorAll('.icons svg');
        this.active = active;
        this.svgs.forEach(svg=>svg.addEventListener('click', this.handleClick.bind(this)))
    }
    handleClick(e:Event|null){
        alert('You havent override the handleClick method in from this class');
    }
}