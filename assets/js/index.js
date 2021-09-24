/* Função para alterar o menu fixo */
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if(scrollY >= 40){
        navbar.style.padding = "10px";
    }else{
        navbar.style.padding = "15px";
    }
});

/* Função para abrir o menu mobile */
const BtnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("navbar-list");

BtnMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
});

//Função para fechar o menu assim que clicar em um link do menu ou fora dele;
const navLink = document.querySelectorAll(".nav__link");
const clicarFora = document.getElementById("main");

const removeMenu = () => {
    nav.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", removeMenu));
clicarFora.addEventListener("click", removeMenu);

//Preloader;
$(window).on('load', function(){
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow'); 
    $('body').delay(350).css({'overflow': 'visible'});
})

/* Função para animar seções do site */
const debounce = (func, wait, immediate) => {
    let timeout;

    return function(...args){
        const context = this;

        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    }
}

let target = document.querySelectorAll("[data-anime]");
let animationClass = "animate";

const animeScroll = () => {
    let windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}
animeScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 100));
}