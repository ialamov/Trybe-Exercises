let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Serviços');
menu.push('Contato');

console.log(menuServices);

console.log(indexOfPortfolio);

console.log(menu);

// for

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++){
  console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let list of names){
  console.log(list);
}