//Funcionalidade para visualizar a senha
let btn = document.querySelector('.fa-eye');
let btnConfirm = document.querySelector('#verConfirmSenha');

//Variáveis do campo nome
let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

//Variáveis do campo cpf
let cpf = document.querySelector('#cpf');
let labelCpf = document.querySelector('#labelCpf');
let validCpf = false;

//Variáveis do campo cro
let cro = document.querySelector('#cro');
let labelCro = document.querySelector('#labelCro');
let validCro = false;

//Variáveis do campo telefone
let telefone = document.querySelector('#telefone');
let labelTelefone = document.querySelector('#labelTelefone');
let validTelefone = false;

//Variáveis do campo endereco
let endereco = document.querySelector('#endereco');
let labelEndereco = document.querySelector('#labelEndereco');
let validEndereco = false;

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

//Variáveis das mensagens de erro e sucesso
let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');


//Validação campo nome
nome.addEventListener('keyup', () => {

    if (nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red;');
        labelNome.innerHTML = '<strong>Nome *Insira no mínimo 3 caracteres</strong>'
        nome.setAttribute('style', 'border-color: red');
        validNome = false;
    }
    else{
        labelNome.setAttribute('style', 'color: green;');
        labelNome.innerHTML = 'Nome Completo:';
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }

});

//Validação campo cpf
cpf.addEventListener('keyup', () => {

    if (cpf.value.length <= 10){
        labelCpf.setAttribute('style', 'color: red;');
        labelCpf.innerHTML = '<strong>Cpf *Insira os 11 dígitos</strong>'
        cpf.setAttribute('style', 'border-color: red');
        validCpf = false;
    }
    else{
        labelCpf.setAttribute('style', 'color: green;');
        labelCpf.innerHTML = 'Cpf:';
        cpf.setAttribute('style', 'border-color: green');
        validCpf = true;
    }

});

//Validação campo cro
cro.addEventListener('keyup', () => {

    if (cro.value.length <= 4){
        labelCro.setAttribute('style', 'color: red;');
        labelCro.innerHTML = '<strong>Cro *Insira no mínimo 5 caracteres</strong>'
        cro.setAttribute('style', 'border-color: red');
        validCro = false;
    }
    else{
        labelCro.setAttribute('style', 'color: green;');
        labelCro.innerHTML = 'Cro:';
        cro.setAttribute('style', 'border-color: green');
        validCro = true;
    }

});

//Validação campo telefone
telefone.addEventListener('keyup', () => {

    if (telefone.value.length <= 2){
        labelTelefone.setAttribute('style', 'color: red;');
        labelTelefone.innerHTML = '<strong>Telefone *Insira no mínimo 3 caracteres</strong>'
        telefone.setAttribute('style', 'border-color: red');
        validTelefone = false;
    }
    else{
        labelTelefone.setAttribute('style', 'color: green;');
        labelTelefone.innerHTML = 'Telefone:';
        telefone.setAttribute('style', 'border-color: green');
        validTelefone = true;
    }

});

//Validação campo endereco
endereco.addEventListener('keyup', () => {

    if (endereco.value.length <= 2){
        labelEndereco.setAttribute('style', 'color: red;');
        labelEndereco.innerHTML = '<strong>Endereco *Insira no mínimo 3 caracteres</strong>'
        endereco.setAttribute('style', 'border-color: red');
        validEndereco = false;
    }
    else{
        labelEndereco.setAttribute('style', 'color: green;');
        labelEndereco.innerHTML = 'Endereço:';
        endereco.setAttribute('style', 'border-color: green');
        validEndereco = true;
    }

});

//Validação campo email
email.addEventListener('keyup', () => {

    if (email.value.length <= 10){
        labelEmail.setAttribute('style', 'color: red;');
        labelEmail.innerHTML = '<strong>Email *Insira o email completo</strong>'
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

//Funcionalidade para cadastrar o dentista
function cadastrar(){

    if(validNome && validCpf && validCro && validTelefone && validEndereco && validEmail && validSenha && validConfirmSenha){

        let listaDentista = JSON.parse(localStorage.getItem('listaDentista') || '[]');

        listaDentista.push(
        {
            nomeCad: nome.value,
            cpfCad: cpf.value,
            croCad: cro.value,
            telefoneCad: telefone.value,
            enderecoCad: endereco.value,
            emailCad: email.value,
            senhaCad: senha.value,
        });


        localStorage.setItem('listaDentista', JSON.stringify(listaDentista));


        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrando dentista...</strong>'

        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML =''


        setTimeout (()=>{
            window.location.href = '../html/loginDentista.html';
        }, 3000)
        
    }
    else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML ='<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'

        msgSuccess.setAttribute('style', 'display: none');
        msgSuccess.innerHTML ='';
    }

};

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
