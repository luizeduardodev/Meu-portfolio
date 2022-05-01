const h1 = document.getElementById("text"); //Pega o H1 com a frase;
const conteudo = document.getElementById("text").textContent; //Pegando o conteúdo do h1;
const speed = 150;
let i = 0;

const typeWriter = () => {
  if (i <= conteudo.length) {
    h1.textContent = conteudo.slice(0, i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

typeWriter();