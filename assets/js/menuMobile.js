const BtnMobile = document.getElementById("btn-mobile");
const nav = document.getElementById("navbar-list"); //Menu personalizado;
const navLink = document.querySelectorAll(".nav__link"); //ul do menu;
const main = document.getElementById("main"); //Main da página;
const logoo = document.getElementById("logo"); //Logo do site;

/* Evento para abrir o menu mobile */
BtnMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
});

//Função para fechar o menu assim que clicar fora dele;
const removeMenu = () => {
    nav.classList.remove("active");
}

// navLink.forEach((item) => {
//     item.addEventListener("click", removeMenu)
// });

navLink.forEach(n => n.addEventListener("click", removeMenu));
main.addEventListener("click", removeMenu);
logoo.addEventListener("click", removeMenu);