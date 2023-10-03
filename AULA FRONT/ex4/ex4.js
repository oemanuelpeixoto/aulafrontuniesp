const nota= [];

for (let i = 0; i < 3; i++) {
  const nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
  notas.push(nota);
}

const media = (nota[0] + nota[1] + nota[2]) / 3;

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
