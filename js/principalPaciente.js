
if (localStorage.getItem('tokenDentista') == null){
    alert('Você precisa estar logado para acessar essa página.');
    

    setTimeout (()=>{
        window.location.href = '../html/loginPaciente.html';
    }, 3);
};

let pacienteLogado = JSON.parse(localStorage.getItem('pacienteLogado'));
let logado = document.querySelector('#logado');


logado.innerHTML = 'Olá ' + pacienteLogado.email;

//Funcionalidade para sair da tela principalPaciente
function sair(){

    localStorage.removeItem('tokenDentista');
    localStorage.removeItem('dentistaLogado');
    window.location.href = "../html/loginDentista.html";

};