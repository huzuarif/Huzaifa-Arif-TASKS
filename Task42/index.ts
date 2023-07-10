function create_car(manufacturer: string, model: string, ...details: any[]): object {
  let car: any = {
    manufacturer: manufacturer,
    model: model
  };

  for (let i = 0; i < details.length; i += 2) {
    const key = details[i];
    const value = details[i + 1];
    car[key] = value;
  }

  return car;
}

let car = create_car('Toyota', 'Camry', 'color', 'red', 'year', 2022, 'features', ['Bluetooth', 'Backup Camera']);

console.log(car);
