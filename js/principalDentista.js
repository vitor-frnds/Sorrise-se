
if (localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página.');
    

    setTimeout (()=>{
        window.location.href = '../html/index.html';
    }, 30);
};

let dentistaLogado = JSON.parse(localStorage.getItem('dentistaLogado'));
let logado = document.querySelector('#logado');


logado.innerHTML = 'Olá ' + dentistaLogado.nome;

//Funcionalidade para sair da tela principalDentista
function sair(){

    localStorage.removeItem('token');
    localStorage.removeItem('dentistaLogado');
    window.location.href = "../html/loginDentista.html";

};
