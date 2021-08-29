const a = -17;
const b = 198;
const c = 261;

// console.log(a + b);
// console.log(a * c);
// console.log(a - b);
// console.log(a / b);
// console.log(a % b);

if (a > b) {
  console.log(a);
} else {
  console.log(b)
}

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c){
  console.log(b);
} else {
  console.log(c);
}

if (a > 0) {
  console.log("Número positivo");
} else if (a < 0) {
  console.log("Número negativo");
} else {
  console.log("Número 0");
}

if ( a + b + c === 180) {
  
}

switch (a) {
  case a < 0:
    console.log("Número negativo");
    break;

  case a > 0:
    
    break;

  case a === 0:
    console.log("Número 0");
    break;

  default:
    console.log("Este não é um número válido.")
}

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

const angleA = 60;
const angleB = -60;
const angleC = 60;

let anglesAdd = angleA + angleB + angleC;
let anglesPostive = angleA > 0 && angleB > 0 && angleC > 0;



if (anglesPostive < 0) {
  console.log("Error 404 - Angle invalid")
} else if (anglesAdd === 180) {
  console.log(true);
} else {
  console.log(false);
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const chessPiece = "Bishop";

switch (chessPiece) {
  
  case 'Bishop':
    console.log("Diagonal");
    break;

  case 'Queen':
    console.log('All directions');
    break;

  case 'King':
    console.log('One space in any direction');
    break;

  case 'Tower':
    console.log('Straight line in any direction');
    break;

  case 'Horse':
    console.log('L shape move');
    break;

  case 'Pawn':
    console.log('Move forward one or two squares');
    break;

  default:
    console.log('Not a chess piece');
}

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

const gradePercentage = 10;

if (gradePercentage >= 90) {
  console.log('A');
} else if (gradePercentage >= 80) {
  console.log('B');
} else if (gradePercentage >= 70) {
  console.log('C');
} else if (gradePercentage >= 60) {
  console.log('D');
} else if (gradePercentage >= 50) {
  console.log('E');
} else if (gradePercentage < 50) {
  console.log('F')
} else {
  console.log('ERROR - Percentage has to be between 0 and 100');
}


// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const x = Math.random() * 100;
const y = Math.random() * 100;
const z = Math.random() * 100;

if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
  console.log(true);
} else { 
  console.log(false);
}

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const aa = Math.random() * 100;
const bb = Math.random() * 100;
const cc = Math.random() * 100;

if (aa % 2 !== 0 || bb % 2 !== 0 || cc % 2 !== 0) {
  console.log(true);
} else { 
  console.log(false);
}

// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const productValue = 83;
const productSale = 100;

let productTotalValue = productValue + (0.2 * productValue);

let profit = productSale - productTotalValue;

let totalSales = 1000;

if (profit <= 0) {
  console.log('ERROR: Sale not possible. Start again the sale');
} else {
  console.log("You're profit is", profit * totalSales, "reais");
}

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?