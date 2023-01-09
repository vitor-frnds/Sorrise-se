
if (localStorage.getItem('tokenPaciente') == null){

    alert('Você precisa estar logado para acessar essa página.');
    

    setTimeout (()=>{
        window.location.href = '../html/index.html';
    }, 3);
};

let pacienteLogado = JSON.parse(localStorage.getItem('pacienteLogado'));
let logado = document.querySelector('#logado');


logado.innerHTML = pacienteLogado.email;

//Funcionalidade para sair da tela principalPaciente
function sair(){

    localStorage.removeItem('tokenPaciente');
    localStorage.removeItem('pacienteLogado');
    window.location.href = "../html/loginPaciente.html";

};
