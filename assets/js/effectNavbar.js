/* Função para alterar o menu fixo */
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    const menu = document.getElementById("menu");

    if (scrollY >= 40) {
        navbar.style.padding = "10px";
        navbar.style.backgroundColor = "#000746";
        navbar.style.borderBottom = "1px solid black";
        menu.style.top = "52px";
    } else {
        navbar.style.padding = "15px";
        navbar.style.backgroundColor = "transparent";
        navbar.style.borderBottom = "none";
        menu.style.top = "62px";
    }
});