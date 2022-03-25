    function criapara() {
    let para = document.createElement('p');
    para.textContent="";
    document.body.appendChild(para);
}
    const botao2 = document.querySelectorAll('#botao2');
    for(var x= 0; x < botao2.length ; x++) {//alterado indice de i para X
    botao2[x].addEventListener('click', criapara);
}