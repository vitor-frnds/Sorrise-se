let dentistaLogado = JSON.parse(localStorage.getItem('dentistaLogado'));

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = true;
nome.value = dentistaLogado.nome;

let cpf = document.querySelector('#cpf');
let labelCpf = document.querySelector('#labelCpf');
let validCpf = true;
cpf.value = dentistaLogado.cpf;

let cro = document.querySelector('#cro');
let labelCro = document.querySelector('#labelCro');
let validCro = true;
cro.value = dentistaLogado.cro;

let telefone = document.querySelector('#telefone');
let labelTelefone = document.querySelector('#labelTelefone');
let validTelefone = true;
telefone.value = dentistaLogado.telefone;

let endereco = document.querySelector('#endereco');
let labelEndereco = document.querySelector('#labelEndereco');
let validEndereco = true;
endereco.value = dentistaLogado.endereco;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = true;
email.value = dentistaLogado.email;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = true;
senha.value = dentistaLogado.senha;

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

//Funcionalidade para visualizar a senha
let btn = document.querySelector('.fa-eye');
let btnConfirm = document.querySelector('#verConfirmSenha');

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

function voltar()
{
    window.location.href = '../html/dadosDentista.html'
}

//Funcionalidade para atualizar os dados do dentista
function salvar(){

    if(validNome && validCpf && validCro && validTelefone && validEndereco && validEmail && validSenha && validConfirmSenha){

        let listaDentista = JSON.parse(localStorage.getItem('listaDentista'));
        let dentistaLogado = JSON.parse(localStorage.getItem('dentistaLogado'));

        let dadosNovos = {
            nomeCad: nome.value,
            cpfCad: cpf.value,
            croCad: cro.value,
            telefoneCad: telefone.value,
            enderecoCad: endereco.value,
            emailCad: email.value,
            senhaCad: senha.value,
        }

        for (let i = 0; i < listaDentista.length; i++) {
            if (listaDentista[i].nomeCad == dentistaLogado.nome &&
                listaDentista[i].cpfCad == dentistaLogado.cpf &&
                listaDentista[i].croCad == dentistaLogado.cro &&
                listaDentista[i].telefoneCad == dentistaLogado.telefone &&
                listaDentista[i].enderecoCad == dentistaLogado.endereco &&
                listaDentista[i].emailCad == dentistaLogado.email &&
                listaDentista[i].senhaCad == dentistaLogado.senha) 
            {
              listaDentista[i] = dadosNovos;
              break;
            }
        }

        dentistaLogado = {
            nome: nome.value,
            cpf: cpf.value,
            cro: cro.value,
            telefone: telefone.value,
            endereco: endereco.value,
            email: email.value,
            senha: senha.value,
        }

        localStorage.setItem('listaDentista', JSON.stringify(listaDentista));
        localStorage.setItem('dentistaLogado', JSON.stringify(dentistaLogado));

        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Atualizando os dados...</strong>'

        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML =''

        setTimeout (()=>{
            window.location.href = '../html/principalDentista.html';
        }, 3000)
        
    }
    else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML ='<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'

        msgSuccess.setAttribute('style', 'display: none');
        msgSuccess.innerHTML ='';
    }

};