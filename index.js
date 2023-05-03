const navbarEl = document.querySelector(".navbar");
const bottomEl = document.querySelector(".bottom-container");
const totopEl = document.querySelector(".to-top");
const blogEl = document.querySelector(".blog");
const burgerEl = document.querySelector(".burger");   
const nav= document.querySelector(".nav-links");
const navlinks = document.querySelectorAll(".nav-links li");
const Icons = document.getElementById("#icons")

//for nabar
window.addEventListener("scroll", ()=> {
   if(window.scrollY > bottomEl.offsetTop -
    navbarEl.offsetHeight-50){
        navbarEl.classList.add("active");
        burgerEl.classList.add("active");
        nav.classList.add("active");
    }
    else{
        navbarEl.classList.remove("active");
         burgerEl.classList.remove("active");
         nav.classList.remove("active");
    }
});
//to -top butoon
window.addEventListener("scroll",()=>{
    if(window.pageYOffset >100){
        totopEl.classList.add("active");
    }
    else{
        totopEl.classList.remove("active");
    }
});
burgerEl.addEventListener("click",()=>{
    nav.classList.toggle("hidden");
});



let changeIcon = function(icon){
    icon.classList.toggle('fa-times');
}





