export default class Clean{
    links: NodeListOf<HTMLLinkElement>;
    container: HTMLDivElement | null;
    goto: string;
    constructor(){
        this.links = document.querySelectorAll('#clean nav a');
        this.container = null;
        this.goto= window.location.href;
        this.links.forEach(link=>{
            link.addEventListener('click', this.handleLink.bind(this));
        });
    }
    toggleLinks(state:string){
        if(state === 'add'){
            this.links.forEach(link=>link.classList.add('disabled'));
        }else{
            this.links.forEach(link=>link.classList.remove('disabled'));
        }
    }
    handleLink(e:Event){
        e.preventDefault();
        const newLocation = (e.target as HTMLLinkElement).href;
        if(this.goto === newLocation){
            return;
        }
        this.goto = newLocation;
        this.container!.classList.add('dissappear');
        this.toggleLinks('add');
    }
    applyListenerContainer(){
        this.container = document.querySelector('#clean .content') as HTMLDivElement;
        this.container!.addEventListener('animationend', (e)=>{
            const el = e.target as HTMLDivElement;
            if(el.classList.contains('appear')){
                el.classList.remove('appear');
                this.toggleLinks('remove');
            }else{
                window.location.href = this.goto!;
            }
        });
    }
}