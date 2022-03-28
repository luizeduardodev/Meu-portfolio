let i = 0;
const tag = document.getElementById("text"); //Pega o H1 com a frase;
const html = document.getElementById("text").innerHTML;
const attr = tag.setAttribute("data", html);
const txt = tag.getAttribute("data");
const speed = 150;

const typeWriter = () => {
  if (i <= txt.length) {
    document.getElementById("text").innerHTML = txt.slice(0, i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }
};

typeWriter();