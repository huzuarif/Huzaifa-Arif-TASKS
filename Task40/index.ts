function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  let magicians: string[] = ['Ali', 'Hamza', 'Moeen', 'Adnan'];
  
  show_magicians(magicians);
  
  function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      let greatMagician = magicians[i] + ' the Great';
      greatMagicians.push(greatMagician);
    }
  
    return greatMagicians;
  }
  
  let greatMagicians: string[] = make_great(magicians);
  show_magicians(greatMagicians);
  
//QUESTION 40

  let originalMagicians: string[] = ['Ali', 'Hamza', 'Moeen', 'Adnan'];

let modifiedMagicians: string[] = make_great([...originalMagicians]);
show_magicians(originalMagicians);
show_magicians(modifiedMagicians);