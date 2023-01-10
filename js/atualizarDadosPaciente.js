let pacienteLogado = JSON.parse(localStorage.getItem('pacienteLogado'));

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = true;
nome.value = pacienteLogado.nome;

let cpf = document.querySelector('#cpf');
let labelCpf = document.querySelector('#labelCpf');
let validCpf = true;
cpf.value = pacienteLogado.cpf;

let telefone = document.querySelector('#telefone');
let labelTelefone = document.querySelector('#labelTelefone');
let validTelefone = true;
telefone.value = pacienteLogado.telefone;

let endereco = document.querySelector('#endereco');
let labelEndereco = document.querySelector('#labelEndereco');
let validEndereco = true;
endereco.value = pacienteLogado.endereco;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let validEmail = true;
email.value = pacienteLogado.email;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = true;
senha.value = pacienteLogado.senha;

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
    window.location.href = '../html/dadosPaciente.html'
}

//Funcionalidade para atualizar os dados do paciente
function salvar(){

    if(validNome && validCpf && validTelefone && validEndereco && validEmail && validSenha && validConfirmSenha){

        let listaPaciente = JSON.parse(localStorage.getItem('listaPaciente'));
        let pacienteLogado = JSON.parse(localStorage.getItem('pacienteLogado'));

        let dadosNovos = {
            nomeCad: nome.value,
            cpfCad: cpf.value,
            telefoneCad: telefone.value,
            enderecoCad: endereco.value,
            emailCad: email.value,
            senhaCad: senha.value,
            dentistaCad: pacienteLogado.dentista,
        }

        for (let i = 0; i < listaPaciente.length; i++) {
            if (listaPaciente[i].nomeCad == pacienteLogado.nome &&
                listaPaciente[i].cpfCad == pacienteLogado.cpf &&
                listaPaciente[i].telefoneCad == pacienteLogado.telefone &&
                listaPaciente[i].enderecoCad == pacienteLogado.endereco &&
                listaPaciente[i].emailCad == pacienteLogado.email &&
                listaPaciente[i].senhaCad == pacienteLogado.senha &&
                listaPaciente[i].dentistaCad == pacienteLogado.dentista) 
            {
              listaPaciente[i] = dadosNovos;
              break;
            }
        }

        pacienteLogado = {
            nome: nome.value,
            cpf: cpf.value,
            telefone: telefone.value,
            endereco: endereco.value,
            email: email.value,
            senha: senha.value,
            dentista: pacienteLogado.dentista,
        }

        localStorage.setItem('listaPaciente', JSON.stringify(listaPaciente));
        localStorage.setItem('pacienteLogado', JSON.stringify(pacienteLogado));

        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Atualizando os dados...</strong>'

        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML =''

        setTimeout (()=>{
            window.location.href = '../html/principalPaciente.html';
        }, 3000)
        
    }
    else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML ='<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'

        msgSuccess.setAttribute('style', 'display: none');
        msgSuccess.innerHTML ='';
    }

};