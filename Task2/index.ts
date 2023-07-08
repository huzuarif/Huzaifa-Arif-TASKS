let Personname = "Hello Eric";
console.log(Personname.toLowerCase()); 
console.log(Personname.toUpperCase());
function toTitleCase(Str : string) {
    let words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
  }
  
  let str : string= "hello eric";
  let titleCaseStr = toTitleCase(str);
  console.log(titleCaseStr);
  