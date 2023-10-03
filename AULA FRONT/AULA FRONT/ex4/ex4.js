const notas = [];

for (let i = 0; i < 3; i++) {
  const nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
  notas.push(nota);
}

// Calcular a média das notas
const media = (notas[0] + notas[1] + notas[2]) / 3;

// Determinar o status do aluno
let situacao;

if (media >= 7) {
  situacao = "Aprovado";
} else if (media >= 4) {
  const notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação:"));
  const mediaRecuperacao = (media + notaRecuperacao) / 2;
  
  if (mediaRecuperacao >= 5) {
    situacao = "Aprovado na Recuperação";
  } else {
    situacao = "Reprovado na Recuperação";
  }
} else {
    situacao = "Reprovado";
}

alert(`O aluno está ${situacao} com média ${media.toFixed(2)}.`);
