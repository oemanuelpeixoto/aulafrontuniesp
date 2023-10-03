/*Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao
dobro do percentual do ano anterior. Faça um programa que determine o
salário atual desse funcionário. Após concluir isto, altere o programa
permitindo que o usuário digite o salário inicial do funcionário. */


let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));
let ano = 1995;

  for (ano = 1996; ano <= new Date().getFullYear(); ano++) {
    salarioInicial *= 1.015; //
    salarioInicial *= 2; //
  }

  console.log(`O salário atual do funcionário em ${ano - 1} é R$ ${salarioInicial.toFixed(2)}.`);

