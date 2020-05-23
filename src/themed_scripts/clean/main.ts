export default class Clean{
    links: NodeListOf<HTMLLinkElement>;
    container: HTMLDivElement;
    goto: string | null;
    animating: boolean;
    constructor(){
        this.links = document.querySelectorAll('#clean nav a');
        this.container = document.querySelector('#clean .content') as HTMLDivElement;
        this.goto= null;
        this.animating=false;
        this.links.forEach(link=>{
            link.addEventListener('click', this.handleLink.bind(this));
        });
        this.container.addEventListener('animationend', (e)=>{
            const el = e.target as HTMLDivElement;
            if(el.classList.contains('appear')){
                el.classList.remove('appear');
            }else{
                window.location.href = this.goto!;
            }
        });
        
    }
    handleLink(e:Event){
        e.preventDefault();
        console.log(this.animating);
        if(this.animating){
            return;
        }
        this.goto = (e.target as HTMLLinkElement).href;
        this.container.classList.add('dissappear')
        this.animating = true;
    }
}