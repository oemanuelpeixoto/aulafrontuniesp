/*Escreva uma função que encontre a área e o perímetro de um círculo, de acordo
com o raio fornecido.*/

function calcularAreaEPerimetroDoCirculo(raio) {
    if (raio <= 0) {
      return "O raio deve ser um valor positivo.";
    }
  
    const pi = 3.14;
    const area = pi * raio ** 2; 
    const perimetro = 2 * pi * raio; 
  
    return {
      area: area,
      perimetro: perimetro
    };
  }
  
 
  const raio = 5; // 
  const resultado = calcularAreaEPerimetroDoCirculo(raio);
  
  console.log(`Área do círculo: ${resultado.area}`);
  console.log(`Perímetro do círculo: ${resultado.perimetro}`);
  