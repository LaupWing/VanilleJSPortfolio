export default class Clean{
    links: NodeListOf<HTMLLinkElement>;
    container: HTMLDivElement | null;
    goto: string | null;
    constructor(){
        this.links = document.querySelectorAll('#clean nav a');
        this.container = null;
        this.goto= null;
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
        this.goto = (e.target as HTMLLinkElement).href;
        this.container!.classList.add('dissappear');
        console.log('toggle from handlelink')
        this.toggleLinks('add');
    }
    applyListenerContainer(){
        this.container = document.querySelector('#clean .content') as HTMLDivElement;
        this.container!.addEventListener('animationend', (e)=>{
            const el = e.target as HTMLDivElement;
            console.log('animation has ended');
            console.log(el.classList);
            if(el.classList.contains('appear')){
                console.log('Removing appear');
                el.classList.remove('appear');
            }else{
                window.location.href = this.goto!;
                console.log('toggle from animationend');
                el.classList.remove('dissappear');
                this.toggleLinks('remove');
            }
        });
    }
}