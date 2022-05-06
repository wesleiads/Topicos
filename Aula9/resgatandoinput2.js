const botao = document.querySelector("#send");
botao.addEventListener("click", function (e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const nome = name.value;
    const email = document.querySelector("#email");
    const mail = email.value;
    let para = document.createElement('p');
    para.textContent = ('Seu nome é ' + nome + ' e seu e-mail é ' + mail);
    document.body.appendChild(para);
})
