export interface listenerInterface{
    element: HTMLElement|Document,
    type: string,
    referenceFunction: (e: any) => void
}

export interface ThemeInterface{
    links: NodeListOf<HTMLLinkElement>;
    container: HTMLDivElement | null;
    goto: string;
    listeners: listenerInterface[];
    toggleLinks(state:string):void;
    handleLink(e:Event):void;
    applyListenerLinks():void;
    applyListenerContainer():void;
}