// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
// Copiar

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbersAdd = 0;

for (index = 0; index < numbers.length; index += 1){
  numbersAdd += numbers[index];
}

console.log(numbersAdd);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

for (index = 0; index < numbers.length; index += 1){
  numbersAdd += numbers[index];
}

let divideNumberAdd = numbersAdd / numbers.length;

console.log(divideNumberAdd);

// 5. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (divideNumberAdd > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// 6. Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let lowerToHighier = numbers.sort();
let verifyBiggerNumber = numbers[0];

for (index = 0; index < lowerToHighier.length; index += 1) {
  if(lowerToHighier[index] > verifyBiggerNumber) {
    verifyBiggerNumber = lowerToHighier[index];
  }
}

console.log(verifyBiggerNumber);

// 7. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbersOdd = [];

for (index = 0; index < numbers.length; index += 1) {
  if(numbers[index] % 2 !== 0) {
    numbersOdd.push(numbers[index]);
  }
}

if (numbersOdd.length !== 0) {
  console.log(numbersOdd.length);
} else {
  console.log('nenhum valor ímpar encontrado');
}


// 8. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

for (index = 0; index < lowerToHighier.length; index += 1) {
  if(lowerToHighier[index] < verifyBiggerNumber) {
    verifyBiggerNumber = lowerToHighier[index];
  }
}

console.log(verifyBiggerNumber);


// 9. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let newArray = []

for (index = 1; index <= 25; index++) {
  newArray.push(index);
}

console.log(newArray);

// 10. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
}

// Bônus
// Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:
// Copiar

let newArrayNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < newArrayNumbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (newArrayNumbers[index] < newArrayNumbers[secondIndex]) {
      let position = newArrayNumbers[index];
      newArrayNumbers[index] = newArrayNumbers[secondIndex];
     newArrayNumbers[secondIndex] = position;
    }
  }
}

console.log(newArrayNumbers);

// Ordene o array numbers em ordem crescente e imprima seus valores;

// console.log(newArrayNumbers.sort());

// Ordene o array numbers em ordem decrescente e imprima seus valores;

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:


// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]