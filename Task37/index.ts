 function make_album(artist: string, album: string, tracks?: number): object {
    let albumObj: any = { artist: artist, album: album };
  
    if (tracks !== undefined) {
      albumObj.tracks = tracks;
    }
  
    return albumObj;
  }
  
  let album1 = make_album('Taylor Swift', 'Folklore');
  let album2 = make_album('Ed Sheeran', '÷', 16);
  let album3 = make_album('Adele', '21');
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  