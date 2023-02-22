//ator

let xAtor = 150;
let yAtor = 366;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++ ){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15 )
    if (colisao){
      colidiu();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
       meusPontos -= 1; 
      }
    }
  }
}

function colidiu(){
  yAtor = 366;
}


function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 250, 0 ));
  text(meusPontos, width / 5, 25);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    colidiu();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}