// console.log (dados);

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado."
        return
            
    }

    campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

let resultados = "";
let titulo = "";
let descricao ="";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase ()

    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <img src="${dado.imagem}" alt="placeholderdeimagem">
            <h3>
                <a href="#" target="_blank"> ${dado.titulo} </a>
            </h3>
                <p class="descricao-meta">
                ${dado.descricao}
                </p><a href="${dado.link}" target="_blank">(Veja aqui)</a>
        </div>
        `

    }
    console.log(dado.titulo.includes(campoPesquisa))

}

if (!resultados) {
    resultados = "<p>Nada foi encontrado. Você não está com sorte...</p>"
}

section.innerHTML = resultados
}

