let checa = document.getElementsByName("ingrediente");
let numElementos = checa.length;
let bt = document.getElementById("iniciar");
let btfechar = document.getElementById("fecharErro");
let btX = document.getElementById("fechar1");
let btP = document.getElementById("fecharPedido");
let btX2 = document.getElementById("fechar2");
let btEntendi = document.getElementById("fecharErro2");
let btX3 = document.getElementById("fechar3");
var hasnextstep = false;
var laststep = false;

for(let x=0; x<numElementos; x++){
   checa[x].onclick = function(){
      let cont = document.querySelectorAll("input[name='ingrediente']:checked").length;  
      hasnextstep = (cont === numElementos);
    }
}

bt.onclick = function iniciarPreparo(botao) {     
    if(hasnextstep){
        document.getElementById("iniciar").innerHTML =('<button class="finalizar">Finalizar</button>');
        let checa2 = document.getElementsByName("preparo");
        let numElementos2 = checa2.length;
        let bt2 = document.getElementById("iniciar");
        for(let x=0; x<numElementos2; x++){
            checa2[x].onclick = function(){
                let cont = document.querySelectorAll("input[name='preparo']:checked").length;
                laststep = (cont === numElementos2);
                //bt2.disabled = !(cont === numElementos2);
            }
        }
        bt2.onclick = function iniciarPreparo2(botao) { 
            if(laststep){
                document.getElementById("backgroundModal").style.display = "block";
                document.getElementById("abrirModal").style.display = "block";
            }
            else{
                document.getElementById("backgroundErro2").style.display = "block";
                document.getElementById("abrirErro2").style.display = "block";
            }
            
        }
        btP.onclick = function fecharModal(botao){
            document.getElementById("backgroundModal").style.display = "none";
            document.getElementById("abrirModal").style.display = "none";
        }
        btX2.onclick = function fecharModal(botao){
            document.getElementById("backgroundModal").style.display = "none";
            document.getElementById("abrirModal").style.display = "none";
        }
    } else {
        document.getElementById("backgroundErro").style.display = "block";
        document.getElementById("abrirErro").style.display = "block";
    }
    btfechar.onclick = function fecharModal(botao){
        document.getElementById("backgroundErro").style.display = "none";
        document.getElementById("abrirErro").style.display = "none";
    }
    btX.onclick = function fecharModal(botao){
        document.getElementById("backgroundErro").style.display = "none";
        document.getElementById("abrirErro").style.display = "none";
    }
    btEntendi.onclick = function fecharModal(botao){
        document.getElementById("backgroundErro2").style.display = "none";
        document.getElementById("abrirErro2").style.display = "none";
    }
    btX3.onclick = function fecharModal(botao){
        document.getElementById("backgroundErro2").style.display = "none";
        document.getElementById("abrirErro2").style.display = "none";
    }
}

