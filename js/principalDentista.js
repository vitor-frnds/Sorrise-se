
if (localStorage.getItem('tokenDentista') == null){
    
    alert('Você precisa estar logado para acessar essa página.');
    

    setTimeout (()=>{
        window.location.href = '../html/index.html';
    }, 3);
};

let dentistaLogado = JSON.parse(localStorage.getItem('dentistaLogado'));
let logado = document.querySelector('#logado');

logado.innerHTML = dentistaLogado.nome;

function infos()
{
    window.location.href = "../html/dadosDentista.html";
}

function consultas()
{
    window.location.href = "../html/agendarConsultas.html";
}

function pacientes()
{
    window.location.href = "../html/pacientesDoDentista.html";    
}


//Funcionalidade para sair da tela principalDentista
function sair(){

    localStorage.removeItem('tokenDentista');
    localStorage.removeItem('dentistaLogado');
    window.location.href = "../html/loginDentista.html";

};
