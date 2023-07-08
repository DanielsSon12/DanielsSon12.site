const box = document.querySelector("#caixa")
const xhttp = new XMLHttpRequest();

const url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
xhttp.open("get", url);  
xhttp.send();


const carregaFilme = prepara =>{    

    const geraEstrela = avaliacao =>{
        let estrela = prepara.opinioes[0].rating;

        switch(estrela){
            case 3:{
                avaliacao = `
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/starcinza.png" alt=""  width="20px" height="20px"><img>
                <img src="./foto/starcinza.png" alt=""  width="20px" height="20px"><img>
                `
            }
            
            case 4:{
                avaliacao = `
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/starcinza.png" alt=""  width="20px" height="20px"><img>
                `;
            } break;
            
            case 5:{
                avaliacao = `
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                <img src="./foto/star.png" alt="" width="20px" height="20px"><img>
                `
            }
        }
        return avaliacao;
    }
    

    const color = faixaEtaria =>{
        if(prepara.classificacao >= 0 && prepara.classificacao <= 14){
            //verde
            faixaEtaria = `<div class="faixaEtariaAva" style="background: green;border-radius: 10px; padding: 5px; width:40px; height:40px;"><h5 style="font-size:20px; margin:0 auto; padding:8px;">L</h5></div>`
        }else if(prepara.classificacao > 14 && prepara.classificacao <18){
            //amarelo
            faixaEtaria = `<div class="faixaEtariaAva" style="background: yellow; border-radius: 10px; padding: 5px; width:40px; height:40px;"><h5 style="font-size:20px; margin:0 auto; padding:8px;">${prepara.classificacao}</h5></div>`
        } else {
            //vermelho
            faixaEtaria = `<div class="faixaEtariaAva" style="background: red; border-radius: 10px; padding: 5px; width:40px; height:40px;"><h5 style="font-size:20px; margin:0 auto; padding:8px;">${prepara.classificacao}</h5></div>`
        }

        return faixaEtaria;
    }
    
    let resp = ` 
    <div class="prepara">
        <div class="banner">
            <img src="${prepara.figura}" alt="">
        </div>    
        <div class="div-tituresu">
            <h3>&#10149; ${prepara.titulo}</h3>
            <p>${prepara.resumo}</p>
        </div>
        <div class="faixaEtariaAva">
            ${color()}
            ${geraEstrela()}
        </div>
        <hr>
        <div class="div-gene">
            <h3>&#10149; Gêneros:</h3>
            <ul>
                <li>${prepara.generos}</li>
            </ul>
        </div>
        <hr>
        <div class="div-elenc">
            <h3>&#10149; Elenco:</h3>
            <ul>
                <li>${prepara.elenco}</li>
            </ul>
        </div>
        <hr>
        <div class="div-titulos">
            <h3>&#10149; Títulos Semelhantes:</h3>
            <ul>
                <li>${prepara.titulosSemelhantes}</li>
            </ul>
        </div>
    </div>`;

    const respfilmes = document.querySelector("#filmes");
    respfilmes.innerHTML += resp;
}

xhttp.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            let resposta = this.responseText;
            let filmes = JSON.parse(resposta); 
            
            filmes.forEach(filme => {
                carregaFilme(filme);
            });
        }
    }
}