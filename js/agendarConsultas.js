function seusPacientes(){

    let dentistaLogado = JSON.parse(localStorage.getItem('dentistaLogado'));
    let listaDentista = JSON.parse(localStorage.getItem('listaDentista') || '[]');
    let dentista = listaDentista.getItem(dentistaLogado);
    let logado = document.querySelector('#logado');

    logado.innerHTML = dentista.nome;

    setTimeout (()=>{
        window.location.href = '../html/loginDentista.html';
    }, 3000)
        
};