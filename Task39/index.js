function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicians = ['Ali', 'Hamza', 'Moeen', 'Adnan'];
show_magicians(magicians);
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        var greatMagician = magicians[i] + ' the Great';
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
var greatMagicians = make_great(magicians);
show_magicians(greatMagicians);
