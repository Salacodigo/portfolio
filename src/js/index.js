import { 
    showMenuMobile,
    hideMenuMobile

 } from './menu.js'


const checkboxMenuMobileBtn = document.getElementById('menu-drop');

function addEventListeners(){

    document.addEventListener('DOMContentLoaded', () => {
            checkboxMenuMobileBtn.addEventListener('click', () => { 
                displayMenuMobile(checkboxMenuMobileBtn);
            }
        );
    })
}
addEventListeners();

function displayMenuMobile(checkboxElement){
    checkboxElement.checked ? showMenuMobile() : hideMenuMobile();
}

/*
const menuBarsBtn = document.getElementById('menu-bars');
const menuXBtn = document.getElementById('menu-x');
const menuList = document.getElementById('menu-list');




function displayMenuMobile(checkbocElement){
    checkbocElement.checked ? showMenuMobile() : hideMenuMobile()
}

function showMenuMobile(){
    menuBarsBtn.classList.remove("hide");
    menuBarsBtn.classList.add("show");
    
    menuXBtn.classList.remove("show");
    menuXBtn.classList.add("hide");
    
    menuList.classList.add("show");
    menuList.classList.remove("hide");
}

function hideMenuMobile(){
    menuBarsBtn.classList.remove("show");
    menuBarsBtn.classList.add("hide");
    
    menuXBtn.classList.remove("hide");
    menuXBtn.classList.add("show");
    
    menuList.classList.add("hide");
    menuList.classList.remove("show");
}*/