function make_sandwich(items) {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log("Bread\n");
}
make_sandwich(['Ham', 'Cheese', 'Lettuce']); // Sandwich with 3 items
make_sandwich(['Turkey', 'Tomato']); // Sandwich with 2 items
make_sandwich(['Peanut Butter', 'Jelly']); // Sandwich with 2 items
