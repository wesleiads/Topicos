    function create() {
    let a = document.createElement('p');
    a.textContent=y;
    document.body.appendChild(a);
}
   
    const button= document.querySelectorAll('#botao3');
    for(var y= 0; y < 10 ; y++){
    button[y].addEventListener('click', create);
}