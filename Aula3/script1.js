    function criarParagrafo() {
    let o = document.createElement('p');
    o.textContent='';
    document.body.appendChild(o);
}
    const botao1 = document.querySelectorAll('#botao1');
    for(var i = 0; i < botao1.length ; i++) {
    botao1[i].addEventListener('click', criarParagrafo);
}