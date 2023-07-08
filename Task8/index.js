// comments
// Question : Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var famous_person = "Albert Einstein";
var composemessage = famous_person + ' once said, "Stay hungry, stay foolish."';
console.log(composemessage);
// Question : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
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
