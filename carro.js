//código do carro

let xCarros = [550, 550, 550, 550, 550, 550]
let yCarros = [43, 96, 150, 210, 270, 318]
let velocidadeCarros = [2, 4, 6, 3, 5, 7]
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++ ){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }   
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++ ){
    xCarros[i] -= velocidadeCarros[i];
  }  
}


function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++ ){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 550;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}