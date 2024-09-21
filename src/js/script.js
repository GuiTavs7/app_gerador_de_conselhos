// 1) Pegando os elementos

const botaoDeAtualizarConselho = document.querySelector(".atualizarConselho");
const numeroConselho = document.querySelector(".idConselho");
const descricaoConselho = document.querySelector(".descricaoConselho");

// 2) Criando a função assíncrona

async function pegarConselho() {

    try {

        const resposta = await fetch("https://api.adviceslip.com/advice");

        if (!resposta.ok){
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }
        
        const dadosDoConselho = await resposta.json();
        const idConselho = `Advice # ${dadosDoConselho.slip.id}`;
        const textoDoConselho = `"${dadosDoConselho.slip.advice}"`;

        numeroConselho.innerText = idConselho;
        descricaoConselho.innerText = textoDoConselho;
        
    } 

    catch(error) {
        console.error("Erro ao tentar buscar as informações da API", error);
    }

}

botaoDeAtualizarConselho.addEventListener("click", pegarConselho);

pegarConselho();