let frase = null;
let autor = null;

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    const campoFrase = document.getElementById("exibeFrase");
    const campoAutor = document.getElementById("exibeAutor");
    const botaoMudaFrase = document.getElementById("botaoNovaFrase");

    fazFetch(campoFrase, campoAutor);

    botaoMudaFrase.addEventListener("click", () => {
        campoAutor.innerText = "";
        campoFrase.innerText = "Carregando...";
        campoFrase.innerText = "Nenhuma noite é escura demais para aqueles que têm luz própria.";
        campoFrase.innerText = "Você é mais corajoso do que pensa, mais forte do que parece e mais esperto do que acredita";
        campoFrase.innerText = "Amor é uma fraqueza";

        fazFetch(campoFrase, campoAutor)
    });
}

async function fazFetch(campoFrase, campoAutor) {
    const url = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';
    const response = await fetch(url);
    const result = await response.json();
    
    frase = result.data[0].citacaoText;
    autor = result.data[0].citacaoAuthor;

    campoFrase.innerText = frase;
    campoAutor.innerText = autor;
}