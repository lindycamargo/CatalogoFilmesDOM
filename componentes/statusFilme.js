const BotaoStatus = () => {
    const botao = document.createElement("button");
    botao.classList.add("status-button");
    botao.innerText = "Status"; 

    botao.addEventListener("click", alternarStatus);

    return botao;
};

const alternarStatus = (evento) => {
    const elementoClicado = evento.target;
   
    const filme = elementoClicado.closest(".filme");
    const status = filme.querySelector(".status");

    if (status.innerText === "Não assistido") {
        status.innerText = "Assistido";
        status.classList.remove("naoAssistido");
        status.classList.add("assistido");
    } else {
        status.innerText = "Não assistido";
        status.classList.remove("assistido");
        status.classList.add("naoAssistido");
    }
};

export default BotaoStatus;
