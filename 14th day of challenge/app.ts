// Question 40: Album: Create objects for music albums.
function make_album (artist :string , title :string , tracks? :number){
    let album = {artist , title}
    if (tracks) {
        album ["tracks"] = tracks
    }
    return album
}
console.log(make_album ("artist one" , "Sunny"))
console.log(make_album ("artist two" , "Hamza"))
console.log(make_album ("artist three" , "Hammad" , 15))
