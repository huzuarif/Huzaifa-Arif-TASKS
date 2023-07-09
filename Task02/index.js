var Personname = "Hello Eric";
console.log(Personname.toLowerCase());
console.log(Personname.toUpperCase());
function toTitleCase(Str) {
    var words = str.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
}
var str = "hello eric";
var titleCaseStr = toTitleCase(str);
console.log(titleCaseStr);
