//Script da tela de login

let formulario = document.querySelector('#formLogin')

formulario.onsubmit = function(evento){
  evento.preventDefault()

  let temErro = false

  function teste(){
    temErro = true
    console.log(temErro)

  }

    let inputNome = document.forms['formLogin']['login']

    let nome = 'testeusername'

  if(inputNome.value !== nome) {
    temErro = true
    inputNome.classList.add('inputError')

    let span = inputNome.nextSibling.nextSibling
    span.innerText = 'Usuário inexistente'    
  } else {
    inputNome.classList.remove('inputError')

    let span = inputNome.nextSibling.nextSibling
    span.innerText = ''    
  }

  let inputSenha = document.forms['formLogin']['password']

  let senha = 'testesenha'

  if(inputSenha.value !== senha){
    temErro = true
    inputSenha.classList.add('inputError')

    let span = inputSenha.nextSibling.nextSibling
    span.innerText = 'Senha incorreta'    
  } else {
    inputSenha.classList.remove('inputError')

    let span = inputSenha.nextSibling.nextSibling
    span.innerText = ''    
  }


  if (!temErro) {
    location.href = "busca-receitas.html";
  }

}