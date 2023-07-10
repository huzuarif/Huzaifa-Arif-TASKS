function make_album(artist, album, tracks) {
    var albumObj = { artist: artist, album: album };
    if (tracks !== undefined) {
        albumObj.tracks = tracks;
    }
    return albumObj;
}
var album1 = make_album('Taylor Swift', 'Folklore');
var album2 = make_album('Ed Sheeran', '÷', 16);
var album3 = make_album('Adele', '21');
console.log(album1);
console.log(album2);
console.log(album3);
