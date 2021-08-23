/* Abrir menu mobile */
const BtnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart'){
        event.preventDefault();
    }

    const nav = document.getElementById('navbar-list');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
}

BtnMobile.addEventListener('click', toggleMenu);
BtnMobile.addEventListener('touchstart', toggleMenu);

//Função para fechar o menu assim que clicar em um link do menu;
const navLink = document.querySelectorAll('.nav__link');
const clicarFora = document.getElementById('main');

function linkAction(){
    const navMenu = document.getElementById('navbar-list');
    navMenu.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
clicarFora.addEventListener('click', linkAction);