var playlist = new Object({keys: '0'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['alison'] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}