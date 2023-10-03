let alturas = [];
let generos = [];

for (let i = 0; i < 15; i++) {
  let altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1} (em metros): `));
  let genero = prompt(`Digite o gênero da pessoa ${i + 1} (H para homem, M para mulher): `);
  
  alturas.push(altura);
  generos.push(genero);
}

let maiorAltura = Math.max(...alturas);
let menorAltura = Math.min(...alturas);

let somaAlturaHomens = 0;
let numMulheres = 0;

for (let i = 0; i < 15; i++) {
  if (generos[i] === 'H') {
    somaAlturaHomens += alturas[i];
  } else if (generos[i] === 'M') {
    numMulheres++;
  }
}

let mediaAlturaHomens = somaAlturaHomens / (15 - numMulheres);

// Exiba os resultados em uma janela de alerta
alert(`A maior altura do grupo é ${maiorAltura} metros.\nA menor altura do grupo é ${menorAltura} metros.\nA média de altura dos homens é ${mediaAlturaHomens} metros.\nO número de mulheres é ${numMulheres}.`);
