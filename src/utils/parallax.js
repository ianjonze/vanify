
    const background = document.getElementByID("app");
    function setTranslate( el, xPos, yPos, zPos) {
        let trans = `translate3d( ${xPos}px, ${yPos}px, ${zPos}px)`;
        el.style.transform = trans;
    }
    
    window.addEventListener("DOMContentLoaded", scrollLoop, false);
 
    let xScrollPosition;
    let yScrollPosition;
    function scrollLoop() {
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;
        setTranslate( background, 0, yScrollPosition * -0.5,  0);
        requestAnimationFrame(scrollLoop);
    }