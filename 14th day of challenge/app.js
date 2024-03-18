// Question 40: Album: Create objects for music albums.
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("artist one", "Sunny"));
console.log(make_album("artist two", "Hamza"));
console.log(make_album("artist three", "Hammad", 15));
