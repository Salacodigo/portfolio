
const menuBarsBtn = document.getElementById('menu-bars');
const menuXBtn = document.getElementById('menu-x');
const menuList = document.getElementById('menu-list');


function addEventListeners(){
    console.log("Cargan Event listeners");
}
addEventListeners();


function displayMobileMenu(checkbocElement){
    checkbocElement.checked ? showMobileMenu() : hideMobileMenu()
}

function showMobileMenu(){
    menuBarsBtn.classList.remove("hide");
    menuBarsBtn.classList.add("show");
    
    menuXBtn.classList.remove("show");
    menuXBtn.classList.add("hide");
    
    menuList.classList.add("show");
    menuList.classList.remove("hide");
}

function hideMobileMenu(){
    menuBarsBtn.classList.remove("show");
    menuBarsBtn.classList.add("hide");
    
    menuXBtn.classList.remove("hide");
    menuXBtn.classList.add("show");
    
    menuList.classList.add("hide");
    menuList.classList.remove("show");
}