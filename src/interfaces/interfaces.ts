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

export interface templateInterface {
    applyListenerContainer: Function
    toggleLinks: Function
    handleLink: Function
    projects?: Function
    listeners: listenerInterface[]
}

export interface globalCssVarsInterace{
    '--background-color': string,
    '--highlight-color': string,
    '--main-font-color': string
}