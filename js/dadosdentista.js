let dentistaLogado = JSON.parse(localStorage.getItem('dentistaLogado'));

let nome = document.querySelector('#nome');
nome.innerHTML = dentistaLogado.nome;

let _cpf = document.querySelector('#cpf');
let cpf = dentistaLogado.cpf;
cpf = cpf.slice(0, 3) + '.' + cpf.substr(3);
cpf = cpf.slice(0, 7) + '.' + cpf.substr(7);
cpf = cpf.slice(0, 11) + '-' + cpf.substr(11);
_cpf.innerHTML = cpf;

let cro = document.querySelector('#cro');
cro.innerHTML = dentistaLogado.cro;

let tel = document.querySelector('#telefone');
let telefone = dentistaLogado.telefone;
telefone = '(' + telefone.slice(0, 2) + ') ' + telefone.substr(2);
telefone = telefone.slice(0, 10) + '-' + telefone.substr(10);
tel.innerHTML = telefone;

let endereco = document.querySelector('#endereco');
endereco.innerHTML = dentistaLogado.endereco;

let email = document.querySelector('#email');
email.innerHTML = dentistaLogado.email;

function voltar()
{
    window.location.href = "../html/principalDentista.html";
}

function editar()
{
    window.location.href = "../html/atualizarDadosDentista.html"
}
