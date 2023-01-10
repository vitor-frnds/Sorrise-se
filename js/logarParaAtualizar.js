// //Variável para visualizar a senha
let btn = document.querySelector('.fa-eye');


function entrar(){

    let email = document.querySelector('#email');
    let labelEmail = document.querySelector('#labelEmail');

    let senha = document.querySelector('#senha');
    let labelSenha = document.querySelector('#labelSenha');

    let msgError = document.querySelector('#msgError');

    let listaPaciente = [];

    let pacienteValid = {
        email: null,
        senha: null,
        dentista: null,
    }    


    listaPaciente = JSON.parse(localStorage.getItem('listaPaciente'));

    if (localStorage.getItem('listaPaciente') == null)
    {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Usuário não cadastrado';
    }

    listaPaciente.forEach((item) => {

        if (email.value == item.emailCad && senha.value == item.senhaCad){

            pacienteValid = {
                email: item.emailCad,
                senha: item.senhaCad,
                dentista: item.dentista
            }
        }
    });


    if (email.value == pacienteValid.email && senha.value == pacienteValid.senha)
    {
        window.location.href = "../html/atualizarCadastroPaciente.html";

        let tokenPaciente = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2); // Gera um número hexadecimal aleatório mas só a partir do segundo valor
        localStorage.setItem('tokenPaciente', tokenPaciente);

        localStorage.setItem('pacienteLogado', JSON.stringify(pacienteValid));
    }
    else {
        labelEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        labelSenha.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');

        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Email ou senha incorretos';

        email.focus();
    }

};


// //Funcionalidade para visualizar a senha
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }
    else {
        inputSenha.setAttribute('type', 'password')
    }

});
