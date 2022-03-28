/* Função para abrir o menu mobile */
const BtnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("navbar-list");

BtnMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
});

//Função para fechar o menu assim que clicar em um link do menu ou fora dele;
const navLink = document.querySelectorAll(".nav__link");
const clicarFora = document.getElementById("main");
const logoFora = document.getElementById("logo");

const removeMenu = () => {
    nav.classList.remove("active");
}

navLink.forEach(n => n.addEventListener("click", removeMenu));
clicarFora.addEventListener("click", removeMenu);
logoFora.addEventListener("click", removeMenu);