const quantidade = parseInt(prompt("Quantos números você deseja somar?"));
let soma = 0;

if (isNaN(quantidade) || quantidade <= 0) {
  console.log("Quantidade inválida. O programa será encerrado.");
} else {
  for (let i = 1; i <= quantidade; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i}:`));

    if (isNaN(numero)) {
      console.log("Você não digitou um número válido. Tente novamente.");
    } else {
      soma += numero;
    }
  }

 alert(`A soma dos ${quantidade} números é: ${soma}`);
}
