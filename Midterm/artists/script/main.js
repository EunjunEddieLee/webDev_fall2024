/* 
this is for making rotating-album cover image in the sidebar
but failed to change album cover img when user clicks one song.

I tried to add 'onclick' event to 'a' tag, but to do this,
I should change the method of floating modal by using JS, but it will take time a lot
*/

// var cur_album = undefined;
// var sidebar_album_cover = document.querySelector(".side-bar > .player > .album-cover");

// const album_list = document.getElementsByClassName('album-list')[0];
// var album_dropdowns = album_list.childNodes;

// sidebar_album_cover.src = document.getElementsByClassName('album-img')[0].src;
// sidebar_album_cover.src = "../img/artist_profile/annemarie.jpg"

// for(i=0; i<album_dropdowns.length; i++) {
//   var song_list = album_dropdowns[i].getElementsByClassName('song-list')[0];
//   var songs = song_list.childNodes;
//   for(j=0; j<songs.length; j++){
//     songs[j].getElementsByClassName('a')[0].addEventListener('click', () => {
//       cur_album = album_dropdowns[i];
//       sidebar_album_cover.src = cur_album.getElementsByClassName('album-img')[0].src;
//       sidebar_album_cover.src = "../img/artist_profile/annemarie.jpg"
//       alert('clicked!');
//     })
//   }
// }

