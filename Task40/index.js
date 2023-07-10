var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
//QUESTION 40
var originalMagicians = ['Ali', 'Hamza', 'Moeen', 'Adnan'];
var modifiedMagicians = make_great(__spreadArray([], originalMagicians, true));
show_magicians(originalMagicians);
show_magicians(modifiedMagicians);
