function make_album(artist_name, album_title, tracks) {
    var albums = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        albums.tracks = tracks;
    }
    return albums;
}
var album_1 = make_album("Nibras", "title no 1");
var album_2 = make_album("munaqib", "title no 2");
var album_3 = make_album("daib", "title no 3", 10);
console.log(album_1);
console.log(album_2);
console.log(album_3);
