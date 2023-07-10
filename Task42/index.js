function create_car(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var i = 0; i < details.length; i += 2) {
        var key = details[i];
        var value = details[i + 1];
        car[key] = value;
    }
    return car;
}
var car = create_car('Toyota', 'Camry', 'color', 'red', 'year', 2022, 'features', ['Bluetooth', 'Backup Camera']);
console.log(car);
