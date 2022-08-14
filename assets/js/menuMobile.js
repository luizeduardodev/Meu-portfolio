const hamburger = document.querySelector(".hamburger"); //Button;
const nav = document.getElementById("navbar-list"); //Menu;
const navLink = document.querySelectorAll(".nav__link"); //ul do menu;
const main = document.getElementById("main"); //Main da página;
const logoo = document.getElementById("logo"); //Logo do site;

/* Evento para abrir o menu mobile */
hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

//Função para fechar o menu assim que clicar fora dele;
const removeMenu = () => {
    nav.classList.remove("active");
};

navLink.forEach((n) => n.addEventListener("click", removeMenu));
main.addEventListener("click", removeMenu);
logoo.addEventListener("click", removeMenu);
