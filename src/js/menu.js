import {
    disableScroll,
    enableScroll

} from "./scroll.js"

const menuBarsBtn = document.getElementById('menu-bars');
const menuXBtn = document.getElementById('menu-x');
const menuList = document.getElementById('menu-list');


function showMenuMobile(){
    disableScroll();
    menuBarsBtn.classList.remove("show");
    menuBarsBtn.classList.add("hide");
    
    menuXBtn.classList.remove("hide");
    menuXBtn.classList.add("show");
    
    menuList.classList.add("show");
    menuList.classList.remove("hide");
}

function hideMenuMobile(){
    enableScroll();
    menuBarsBtn.classList.remove("hide");
    menuBarsBtn.classList.add("show");
    
    menuXBtn.classList.remove("show");
    menuXBtn.classList.add("hide");
    
    menuList.classList.remove("show");
    menuList.classList.add("hide");
}

function navigateToSection(){
    hideMenuMobile();
}


export{
    showMenuMobile,
    hideMenuMobile,
    navigateToSection,
    menuList
}