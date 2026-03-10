import botaoStatus from "Componentes/statusFilme.js";
import botaoExcluir from "Componentes/excluirFilme.js";

const adicionarFilme = (evento) => {
    evento.preventDefault();

    const inputNome = document.querySelector("#nomeFilme");
    const inputGenero = document.querySelector("#generoFilme");
    const lista = document.querySelector("#catalogo");

    const nomeFilme = inputNome.value;
    const generoFilme = inputGenero.value;

    if (nomeFilme === "" || generoFilme === "") {
        alert("Preencha todos os campos");
        return;
    }

    const filme = document.createElement("div");
    filme.classList.add("filme");

    const titulo = document.createElement("h3");
    titulo.innerText = nomeFilme;

    const genero = document.createElement("p");

    genero.innerText = `Gênero: ${generoFilme}`;

    const status = document.createElement("p");
    status.innerText = "Não assistido";
    status.classList.add("status", "naoAssistido");

    filme.appendChild(titulo);
    filme.appendChild(genero);
    filme.appendChild(status);

    filme.appendChild(botaoStatus());
    filme.appendChild(botaoExcluir());

    lista.appendChild(filme);

    inputNome.value = "";
    inputGenero.value = "";
}

const botaoAdicionar = document.querySelector("#btnAdicionar");
botaoAdicionar.addEventListener("click", adicionarFilme);

