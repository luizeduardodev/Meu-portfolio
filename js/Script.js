/* Função para animar seções do site */
const debounce = function(func, wait, immediate){
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
    };
};

var target = document.querySelectorAll('[data-anime]');
var animationClass = 'animate';

function animeScroll(){
    var windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
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

/* Abrir menu mobile */
const BtnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart'){
        event.preventDefault();
    }
    const nav = document.getElementById('navbar-list');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

BtnMobile.addEventListener('click', toggleMenu);
BtnMobile.addEventListener('touchstart', toggleMenu);

//Função para fechar o menu assim que clicar em um link do menu;
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('navbar-list');
    navMenu.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Mostrar scroll top */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 300){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);