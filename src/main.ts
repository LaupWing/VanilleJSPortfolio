function setLetterSpacingLogo():void{
    const logo = document.querySelector('#clean #logo') as HTMLHeadingElement;
    const spans = document.querySelectorAll('#clean #logo span') as NodeListOf<HTMLSpanElement>;
    const logoWidth:number = logo.offsetWidth;
    
    spans.forEach(span=>{
        const diffrence:number = logoWidth - span.offsetWidth; 
        const letters:number = span.textContent?.length!;
        if(diffrence>0){
            span.style.letterSpacing = `${diffrence/letters}px`;
        }
    })
}

window.addEventListener('load', setLetterSpacingLogo);