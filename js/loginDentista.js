//Variável para visualizar a senha
let btn = document.querySelector('.fa-eye');

function voltar(){
    window.location.href = "../html/index.html";
}

function entrar(){

    let email = document.querySelector('#email');
    let labelEmail = document.querySelector('#labelEmail');

    let senha = document.querySelector('#senha');
    let labelSenha = document.querySelector('#labelSenha');

    let msgError = document.querySelector('#msgError');

    let listaDentista = [];

    let dentistaValid = {
        nome: null,
        cpf: null,
        cro: null,
        telefone: null,
        endereco: null,
        email: null,
        senha: null
    }    


    listaDentista =JSON.parse(localStorage.getItem('listaDentista'));

    if (localStorage.getItem('listaDentista') == null)
    {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Usuário não cadastrado';
    }

    listaDentista.forEach((item) => {

        if (email.value == item.emailCad && senha.value == item.senhaCad){

            dentistaValid = {
                nome: item.nomeCad,
                cpf: item.cpfCad,
                cro: item.croCad,
                telefone: item.telefoneCad,
                endereco: item.enderecoCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    });


    if (email.value == dentistaValid.email && senha.value == dentistaValid.senha)
    {
        window.location.href = "../html/principalDentista.html";

        let tokenDentista = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2); // Gera um número hexadecimal aleatório mas só a partir do segundo valor
        localStorage.setItem('tokenDentista', tokenDentista);

        localStorage.setItem('dentistaLogado', JSON.stringify(dentistaValid));
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

