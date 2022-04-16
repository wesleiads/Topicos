function calcular() {
  var num01 = window.document.getElementById('num1');
  var num02 = window.document.getElementById('num2');

  var selopera = window.document.getElementById('selopera');
  var resultado = window.document.getElementById('resultado');

  var n1 = Number(num01.value);
  var n2 = Number(num02.value);

  var operador = selopera.value; //Obtendo o valor do <option> selecionado
  if (operador == 'Soma') {
    var s = n1 + n2;
  }
  if (operador == 'Subtracao') {
    var s = n1 - n2;
  }
  if (operador == 'Multiplicacao') {
    var s = n1 * n2;
  }
  if (operador == 'Divisao') {
    var s = n1 / n2;
  }
  resultado.innerHTML = `A ${operador} entre ${n1} e ${n2} é igual a ${s}`
}