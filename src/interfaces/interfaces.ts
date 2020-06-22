export interface isListener{
    element: HTMLElement|Document,
    type: string,
    referenceFunction: (e: any) => void
}

export interface isTheme{
    links: NodeListOf<HTMLLinkElement>;
    container: HTMLDivElement | null;
    goto: string;
    listeners: isListener[];
    toggleLinks(state:string):void;
    handleLink(e:Event):void;
    applyListenerLinks():void;
    applyListenerContainer():void;
}

export interface isTemplate {
    applyListenerContainer: Function
    toggleLinks: Function
    handleLink: Function
    pageMethods?: Function
    listeners: isListener[]
}

export interface isGlobalCss{
    '--background-color': string,
    '--highlight-color': string,
    '--main-font-color': string
}


export type ListElements = NodeListOf<HTMLLinkElement>; 