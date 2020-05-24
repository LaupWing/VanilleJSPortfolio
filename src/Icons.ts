export default class Icons{
    icons: NodeListOf<SVGAElement>;
    active: string;
    isShow: boolean;
    constructor(active:string){
        this.icons = document.querySelectorAll('.icons svg');
        this.active = active;
        this.isShow = false;
        this.setActive();
        this.icons.forEach(icon=>icon.addEventListener('click', this.changeTemplate.bind(this)))
    }
    setActive(){
        this.icons.forEach(icon=>{
            icon.classList.remove('active');
            if(icon.classList.contains(this.active)){
                icon.classList.add('active');
            }
        });
    }
    changeTemplate(){
        const filtered = Array.from(this.icons).filter(x=>!x.classList.contains('active'));
        filtered.forEach((x,i)=>{
            x.classList.add(`show_${i}`);
        });
        const activeStyling = Array.from(this.icons).find(x=>x.classList.contains(this.active));
        activeStyling?.classList.add('show');
    }
}