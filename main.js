function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        console.log('Elemento não encontrado')

    } else {
        elemento.play();
    } 

/*    if (elemento != null && elemento. === 'audio') {
        console.log(elemento.);
    }
    else {
        console.log('Elemento não encontrado ou seletor invalido')

    }
*/
}

const listaDeTeclas = document.querySelectorAll('.tecla');
/*
let contador = 0;

//enquanto a variavel contador for menor que o tamanho da lista de teclas
while (contador < listaDeTeclas.length){
    //constante que guarda a tecla
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador);
}
*/

//para
for (let contador = 0; contador < listaDeTeclas.length; contador ++){
    //constante que guarda a tecla
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        if ('evento.code' === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}
