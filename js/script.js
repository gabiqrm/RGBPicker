// função para esperar o html carregar
window.addEventListener("load", function (event) {

  //atribuindo valores da DOM para as variáveis do javascript
  rangeRed = this.document.querySelector("#red");
  rangeGreen = this.document.querySelector("#green");
  rangeBlue = this.document.querySelector("#blue");

  txtRed = this.document.querySelector("#txtRed");
  txtgeGreen = this.document.querySelector("#txtGreen");
  txtBlue = this.document.querySelector("#txtBlue");
  
  // quadrado para mudança de cor 
  quadrado = this.document.querySelector("#quadrado");


  // adicionando evento para mudar de cor quando o usuário realizar o click
  rangeRed.addEventListener("mouseup", function () {
    // função para mudar de cor, passando como parâmetro o input desabilitado 
    // alterar o valor e o nosso range que está sendo manipulado na hora
    mudarCor(txtRed, rangeRed.value);
  })
  rangeGreen.addEventListener("mouseup", function () {
    mudarCor(txtgeGreen, rangeGreen.value);
  })
  rangeBlue.addEventListener("mouseup", function () {
    mudarCor(txtBlue, rangeBlue.value);
  })

  // adicionando evento para mudar de cor quando o usuário mover os valores do 
  // range com as setas do teclado
  rangeRed.addEventListener("keydown", function (botao) {
    if(botao.key == 'ArrowRight'){
      mudarCor(txtRed, rangeRed.value);
    }
    if(botao.key == 'ArrowLeft'){
      mudarCor(txtRed, rangeRed.value);
    }
   
  })
  rangeGreen.addEventListener("keydown", function (botao) {
    if(botao.key == 'ArrowRight'){
      mudarCor(txtgeGreen, rangeGreen.value);
    }
    if(botao.key == 'ArrowLeft'){
      mudarCor(txtgeGreen, rangeGreen.value);
    }
   
  })
  rangeBlue.addEventListener("keydown", function (botao) {
    if(botao.key == 'ArrowRight'){
      mudarCor(txtBlue, rangeBlue.value);
    }
    if(botao.key == 'ArrowLeft'){
      mudarCor(txtBlue, rangeBlue.value);
    }
    
  })

  // função para atualizar o valor do input desabilitado e alterar o background 
  // color do css do nosso quadrado
  function mudarCor(txt, cor) {
    txt.value = cor;
    quadrado.style.backgroundColor = `rgb(${rangeRed.value}, 
    ${rangeGreen.value}, ${rangeBlue.value})`
    
  }


});