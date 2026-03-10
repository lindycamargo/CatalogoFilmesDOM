const botaoExcluir = () => {
    const botao = document.createElement("button");
    botao.classList.add("delete-button");

    const imagemExcluir = document.createElement("img");

    imagemExcluir.src = "img/excluir - Editado.png"; 
    imagemExcluir.width = 15; 

    botao.appendChild(imagemExcluir);
    botao.addEventListener("click", excluirFilme);

    return botao;
}

const excluirFilme = (evento) => {

    const elementoClicado = evento.target;
    const filme = elementoClicado.closest(".filme");

    if (filme) {
        filme.remove();
    }
}

export default botaoExcluir;
