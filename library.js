const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const helpPlaylists = function (playlistId) {
       let hplist = library['playlists']
       let output1 = playlistId + ": " + hplist[playlistId]['name'] + ' - ' + hplist[playlistId]['tracks'].length + ' tracks' + '\n'
       return output1
}
const printPlaylists = function() {
   let plist = library['playlists']
   let output2 = ''
   for(let key in plist){
      output2 += helpPlaylists(key)
   }
  return output2
}
console.log(printPlaylists())


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const helpPrintTracks = function(tracksId) {
  let tlist = library['tracks']
  let output3 = tracksId+ ': '+tlist[tracksId]['name'] +' by '+ tlist[tracksId]['artist'] +' ('+ tlist[tracksId]['album']+')'+'\n'
  return output3
}
const printTracks = function() {
  let tlist = library['tracks']
  let output4 = ''
    for(let key in tlist){
       output4 += helpPrintTracks(key)
    }
  return output4
}
console.log(printTracks())

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let plist = library['playlists'][playlistId]['tracks']
  let result = ''
  for (let i = 0; i < plist.length; i++) {
    result += helpPrintTracks(plist[i])
  }
   return helpPlaylists(playlistId) + result
}
console.log(printPlaylist('p02'))

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  let plist = library['playlists'][playlistId] 
  if(!plist['tracks'].includes(trackId)){
    plist['tracks'].push(trackId)
    return  plist 
  }
  return trackId +' is already in the '+ playlistId + ' list.'
}
console.log(addTrackToPlaylist('t01', 'p01'))

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library 
const addTrack = function(name, artist, album) {
     let atlist = {}
     atlist['id'] = generateUid()
     atlist['name'] = name
     atlist['artist'] = artist 
     atlist['album'] = album
     library['tracks'][atlist['id']] = atlist
     return library['tracks']
}
console.log(addTrack('kito', 'Jay', 'Jay'))

// adds a playlist to the library
const addPlaylist = function(name) {
  let aplist = {}
  aplist['id'] = generateUid()
  aplist['name'] = name
  aplist['tracks'] = []
  library['playlists'][aplist['id']] = aplist
  return library['playlists']
}
console.log(addPlaylist('pop'))

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  
}
console.log(library.toString())