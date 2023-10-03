let nota1 = parseFloat(prompt("Digite a sua nota 1:"));
let nota2 = parseFloat(prompt("Digite a sua nota 2:"));
let nota3 = parseFloat(prompt("Digite a sua nota 3:"));

let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

if (media >= 7) {
    resultado = "APROVADO";
} else if (media >= 5) {
    resultado = "RECUPERAÇÃO";
} else {
    resultado = "REPROVADO";
}

alert(`Média: ${media}\nResultado: ${resultado}`);
