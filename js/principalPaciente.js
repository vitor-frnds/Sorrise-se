
if (localStorage.getItem('tokenPaciente') == null){

    alert('Você precisa estar logado para acessar essa página.');
    

    setTimeout (()=>{
        window.location.href = '../html/index.html';
    }, 3);
};

let pacienteLogado = JSON.parse(localStorage.getItem('pacienteLogado'));
let logado = document.querySelector('#logado');

if (pacienteLogado.nome==null)
    logado.innerHTML = pacienteLogado.email;
else
    logado.innerHTML = pacienteLogado.nome;

function infos()
{
    window.location.href = "../html/dadosPaciente.html";
}

function seuTratamento()
{

}

function seuDentista()
{
    window.location.href = "../html/dadosSeuDentista.html";
}

//Funcionalidade para sair da tela principalPaciente
function sair(){

    localStorage.removeItem('tokenPaciente');
    localStorage.removeItem('pacienteLogado');
    window.location.href = "../html/loginPaciente.html";

};
