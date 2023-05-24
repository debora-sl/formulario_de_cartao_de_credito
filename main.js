console.log("main.js conectado");



const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    //pegando a numeracao do cartao
    const numeroCartao = document.querySelector('[data-cartao-numero]');
    console.log(Math.random() * 16);

    //pegando o titular no cartao
    var titular = document.querySelector('[data-cartao-titular]');
    const inputTitular = document.querySelector('[data-formulario-titular]');
    titular.innerHTML = inputTitular.value;

    //pegando o ano
    var ano = document.querySelector('[data-cartao-ano]');
    const inputAno = document.querySelector('[data-formulario-ano]');
    ano.innerHTML = inputAno.value;

    //pegando o mês
    var mes = document.querySelector('[data-cartao-mes]');
    const inputMes = document.querySelector('[data-formulario-mes]');
    mes.innerHTML = inputMes.value;


});


