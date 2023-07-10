var animals = ['Dog', 'Cat', 'Rabbit'];
// Printing just the name of each animal
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log('-------------------------');
// Printing a statement about each animal
for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log('-------------------------');
console.log('Any of these animals would make a great pet!');
