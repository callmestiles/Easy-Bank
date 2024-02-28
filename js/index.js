const navBtn = document.querySelector(".mobile-nav");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");

navBtn.addEventListener("click", ()=>{
    const visibility  = nav.getAttribute("data-visible");
    if(visibility === "false"){
        nav.setAttribute("data-visible", true);
        navBtn.setAttribute("data-expanded", true);
        body.setAttribute("data-expanded", true);
    }else{
        nav.setAttribute("data-visible", false);
        navBtn.setAttribute("data-expanded", false);
        body.setAttribute("data-expanded", false);
    }
})