let hamburgerBtn= document.querySelector(".hamburger-btn")
let openIcon = document.querySelector(".open-menu")
let closeIcon = document.querySelector(".close-menu")
let mobileNav= document.querySelector(".header-nav")

hamburgerBtn.addEventListener("click",()=>{
   if(mobileNav.style.display==="block"){
    openIcon.style.display="block";
    closeIcon.style.display="none"
    mobileNav.style.display="none"
   }else{
    openIcon.style.display="none"
    closeIcon.style.display="block"
    mobileNav.style.display="block"
   }
})