function calculadora() {
    window.alert('Olá, vamos iniciar a Calculadora');
    var operacao = prompt("informe uma das seguintes operações: 1 para Somar - 2 para Subtrair - 3 para Divisão - 4 para Multiplicar");
    window.alert('você selecionou' + ' ' + operacao);
    var num1 = parseInt(prompt("Informe o primeiro valor"));
    var num2 = parseInt(prompt("informe o segundo valor"));
    window.alert('Você informou ' + num1 + ' e ' + num2 + ' para realizar a operação' + ' ' + operacao);
    var adicao = num1 + num2;
    var sub = num1 - num2;
    var multi = num1 * num2;
    var div = num1 / num2;

    if (operacao === '1')
        alert('A soma é: ' + ' ' + adicao);
    else if
        (operacao === '2')
        alert('A subtração é: ' + '' + sub);
    else if (operacao === '3')
        alert('A multiplicação é: ' + '' + multi);
    else if (operacao === '4')
        alert('A divisão é: ' + '' + div);
}

