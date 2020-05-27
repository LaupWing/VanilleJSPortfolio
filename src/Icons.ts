export default class Icons{
    isShow: boolean;
    svgs:NodeListOf<SVGElement>;
    active: string;
    
    constructor(active:string, svgs:NodeListOf<SVGElement>){
        this.svgs = svgs;
        this.active = active;
        this.isShow = false;
        this.setActive();
    }
    setActive(){
        this.svgs.forEach(icon=>{
            icon.classList.remove('active');
            if(icon.classList.contains(this.active)){
                icon.classList.add('active');
            }
        });
    }
    toggleShow(){
        if(this.isShow){
            this.removeShow();
            this.isShow = false;
        }else{
            this.showIcons();
            this.isShow = true;
        }
    }
    changeTheme(){
        this.setActive();
        this.removeShow();
        this.isShow = false;
    }
    removeShow(){
        this.svgs.forEach(icon=>{
            const showClass:string = Array.from(icon.classList).find(x=>x.includes('show'))!;
            icon.classList.remove(showClass);
        })
    }
    showIcons(){
        const filtered = Array.from(this.svgs).filter(x=>!x.classList.contains('active'));
        filtered.forEach((x,i)=>{
            x.classList.add(`show_${i}`);
        });
        const activeStyling = Array.from(this.svgs).find(x=>x.classList.contains(this.active));
        activeStyling?.classList.add('show');
    }
}