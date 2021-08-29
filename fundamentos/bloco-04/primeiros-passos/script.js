const myName = "Douglas de Oliveira Ialamov";
const birthCity = "São Paulo";
let birthYear = 1987;

console.log(myName, birthCity, birthYear);

birthYear = 2030;

console.log(birthYear);

// Constantes não podem ser alteradas, por isto não há como dar uma nova atribuição.

const base = 5;
let height = 8;
const area = base * height;

console.log(area);

const perimeter = 2 * base + 2 * height;

console.log(perimeter);

const nota = 50;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o).");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera.");
} else {
  console.log("Você foi reprovado.")
}

let condition = 'Aprovada';

switch (condition) {
  case 'Aprovada':
    console.log('Parabéns, você foi aprovada(o).');
    break;

  case 'Lista':
    console.log("Você está na nossa lista de espera.");

  case 'Reprovado':
    console.log("Você foi reprovado.");
    break;

  default:
    console.log('Não se aplica.')
}

