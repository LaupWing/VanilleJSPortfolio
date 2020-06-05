type isRgb ={
    r:number,
    g:number,
    b:number
}
export default function invertColor({r,g,b}:isRgb) {
    return `rgb(${255-r},${255-g},${255-b})`;
}
