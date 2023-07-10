let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Printing just the name of each animal
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log('-------------------------');

// Printing a statement about each animal
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];
  console.log(`A ${animal} would make a great pet.`);
}

console.log('-------------------------');

console.log('Any of these animals would make a great pet!');
