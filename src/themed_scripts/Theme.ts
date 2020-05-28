interface listenerObj{
    element: HTMLElement|Document,
    type: string
}

export default class Theme{
    links: NodeListOf<HTMLLinkElement>;
    container: HTMLDivElement | null;
    goto: string;
    listeners: listenerObj[];
    constructor(){
        this.links = document.querySelectorAll('nav ul a');
        this.container = document.querySelector('#app .content');
        this.goto= window.location.href;
        this.listeners = [];
        this.applyListenerLinks();
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
        const clickedLink = e.target as HTMLLinkElement;
        const newLocation = clickedLink.href;
        if(this.goto === newLocation){
            return;
        }
        this.links.forEach(link=>link.classList.remove('active'));
        clickedLink.classList.add('active');
        this.goto = newLocation;
        this.container!.classList.add('dissappear');
        this.toggleLinks('add');
    }
    applyListenerLinks(){
        this.links.forEach(link=>{
            if(window.location.hash.length === 0){
                if(link.href === `${window.location.origin}/#`){
                    link.classList.add('active');
                }
            }else{
                if(link.href === window.location.href){
                    link.classList.add('active');
                }
            }
            this.listeners.push({
                element: link,
                type: 'click'
            })
            link.addEventListener('click', this.handleLink.bind(this));
        });
    }
    applyListenerContainer(){
        this.container = document.querySelector('#app .content') as HTMLDivElement;
        this.listeners.push({
            element: this.container,
            type: 'animationend'
        })
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