let pacienteLogado = JSON.parse(localStorage.getItem('pacienteLogado'));

let nome = document.querySelector('#nome');

nome.innerHTML = pacienteLogado.nome;

let _cpf = document.querySelector('#cpf');
let cpf = pacienteLogado.cpf;

if (cpf != null){
    cpf = cpf.slice(0, 3) + '.' + cpf.substr(3);
    cpf = cpf.slice(0, 7) + '.' + cpf.substr(7);
    cpf = cpf.slice(0, 11) + '-' + cpf.substr(11);
}
_cpf.innerHTML = cpf;

let tel = document.querySelector('#telefone');
let telefone = pacienteLogado.telefone;

if (telefone != null){
    telefone = '(' + telefone.slice(0, 2) + ') ' + telefone.substr(2);
    telefone = telefone.slice(0, 10) + '-' + telefone.substr(10);
}
tel.innerHTML = telefone;

let endereco = document.querySelector('#endereco');
endereco.innerHTML = pacienteLogado.endereco;

let email = document.querySelector('#email');
console.log(pacienteLogado.email);
email.innerHTML = pacienteLogado.email;

function voltar()
{
    window.location.href = "../html/principalPaciente.html";
}

function editar()
{
    window.location.href = "../html/atualizarDadosPaciente.html"
}
