
const menuBarsBtn = document.getElementById('menu-bars');
const menuXBtn = document.getElementById('menu-x');
const menuList = document.getElementById('menu-list');


function showMenuMobile(){
    menuBarsBtn.classList.remove("show");
    menuBarsBtn.classList.add("hide");
    
    menuXBtn.classList.remove("hide");
    menuXBtn.classList.add("show");
    
    menuList.classList.add("show");
    menuList.classList.remove("hide");
}

function hideMenuMobile(){
    menuBarsBtn.classList.remove("hide");
    menuBarsBtn.classList.add("show");
    
    menuXBtn.classList.remove("show");
    menuXBtn.classList.add("hide");
    
    menuList.classList.remove("show");
    menuList.classList.add("hide");
}

export{
    showMenuMobile,
    hideMenuMobile
}