var favoritePizzas = ['Margherita', 'Pepperoni', 'Mushroom'];
// Printing just the name of each pizza
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
console.log('-------------------------');
// Printing a sentence using the name of each pizza
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizza."));
}
console.log('-------------------------');
console.log('I really love pizza!');
