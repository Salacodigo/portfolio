function disableScroll(){  
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function(){
         window.scrollTo(x, y) 
    };
}

function enableScroll(){  
    window.onscroll = null;
}

export{
    disableScroll,
    enableScroll
}