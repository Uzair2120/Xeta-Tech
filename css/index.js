const menu= document.querySelector(".button");
const btn=document.querySelector(".in-btn");
const menbar=document.querySelector(".menu");

menu.addEventListener('click', function(a){
    menu.classList.toggle("active");
    btn.classList.toggle("btn-active");
    menbar.classList.toggle("after-menu");
});