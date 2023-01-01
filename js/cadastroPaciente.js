//Variáveis para a visualização da senha
let btn = document.querySelector('.fa-eye');
let btnConfirm = document.querySelector('#verConfirmSenha');

//Variáveis do campo email
let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = false;

//Variáveis do campo senha
let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

//Variáveis do campo confirmar senha
let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;


//Validação campo email
email.addEventListener('keyup', () => {

    if (email.value.length <= 10){
        labelEmail.setAttribute('style', 'color: red;');
        labelEmail.innerHTML = '<strong>Email *Insira no mínimo 11 caracteres</strong>'
        email.setAttribute('style', 'border-color: red');
        validEmail = false;
    }
    else{
        labelEmail.setAttribute('style', 'color: green;');
        labelEmail.innerHTML = 'Email:';
        email.setAttribute('style', 'border-color: green');
        validEmail = true;
    }

});

//Validação campo senha
senha.addEventListener('keyup', () => {

    if (senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red;');
        labelSenha.innerHTML = '<strong>Senha *Insira no mínimo 6 caracteres</strong>'
        senha.setAttribute('style', 'border-color: red');
        validSenha = false;
    }
    else{
        labelSenha.setAttribute('style', 'color: green;');
        labelSenha.innerHTML = 'Senha:';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }

});

//Validação campo Confirmar senha
confirmSenha.addEventListener('keyup', () => {

    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red;');
        labelConfirmSenha.innerHTML = '<strong>Confirmar Senha *As senhas não conferem</strong>'
        confirmSenha.setAttribute('style', 'border-color: red');
        validConfirmSenha = false;
    }
    else{
        labelConfirmSenha.setAttribute('style', 'color: green;');
        labelConfirmSenha.innerHTML = 'Confirmar Senha:';
        confirmSenha.setAttribute('style', 'border-color: green');
        validConfirmSenha = true;
    }

});

//Funcionalidade para visualizar a senha
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }
    else {
        inputSenha.setAttribute('type', 'password')
    }

});

//Funcionalidade para visualizar a Confirmar Senha
btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    }
    else {
        inputConfirmSenha.setAttribute('type', 'password')
    }

});
