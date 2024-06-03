function make_album(artist_name:string,album_title:string,tracks?:number){
  let albums:{
    artist:string,
    title:string,
    tracks?:number
  }={
    artist:artist_name,
    title:album_title,
  }
  if(tracks !== undefined){
    albums.tracks = tracks
  }
  return albums
}
let album_1 = make_album("Nibras","title no 1")
let album_2 = make_album("munaqib","title no 2")
let album_3 = make_album("daib","title no 3",10)

console.log(album_1)
console.log(album_2)
console.log(album_3)