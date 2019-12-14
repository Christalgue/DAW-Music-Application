const BASE_URL = "https://ubeat.herokuapp.com/unsecure";
const OWNER_MAIL = "christalgue@yopmail.com";

export const getPlaylists = () => {
  return fetch(`${BASE_URL}/playlists`)
    .then(response => response.json())
    .then(playlists => {
      let ownerPlaylists = [];
      for (let i = 0; i < playlists.length; i++) {
        if (playlists[i]["owner"].email === OWNER_MAIL) {
          ownerPlaylists.push(playlists[i]);
        }
      }
      return ownerPlaylists;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getPlaylist = id => {
  return fetch(`${BASE_URL}/playlists/${id}`)
    .then(response => response.json())
    .then(playlist => {
      return playlist;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const createPlaylist = playlistName => {
  return fetch(`${BASE_URL}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: playlistName,
      owner: OWNER_MAIL
    })
  })
    .then(response => response.json())
    .then(playlist => {
      return playlist;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const renamePlaylist = (newName, tracks, id) => {
  return fetch(`${BASE_URL}/playlists/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: newName,
      owner: OWNER_MAIL,
      tracks: tracks
    })
  })
    .then(response => response.json())
    .then(playlist => {
      return playlist;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const deletePlaylist = id => {
  return fetch(`${BASE_URL}/playlists/${id}`, {
    method: "DELETE"
  }).catch(err => {
    console.log(err.message);
  });
};

export const addTrack = (track, id) => {
  return fetch(`${BASE_URL}/playlists/${id}/tracks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(track)
  })
    .then(response => response.json())
    .then(playlist => {
      return playlist;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const deleteTrack = (trackId, playlistId) => {
  return fetch(`${BASE_URL}/playlists/${playlistId}/tracks/${trackId}`, {
    method: "DELETE"
  }).catch(err => {
    console.log(err.message);
  });
};

export const getArtist = id => {
  return fetch(`${BASE_URL}/artists/${id}`)
    .then(response => response.json())
    .then(response => {
      return response.results[0];
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getArtistAlbums = id => {
  return fetch(`${BASE_URL}/artists/${id}/albums`)
    .then(response => response.json())
    .then(response => {
      return response.results;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getAlbum = id => {
  return fetch(`${BASE_URL}/albums/${id}`)
    .then(response => response.json())
    .then(response => {
      return response.results[0];
    })
    .catch(err => {
      console.log(err.message);
    });
};

// TODO: if time allows for it, reduce the amount of data returned
export const getAlbumTracks = id => {
  return fetch(`${BASE_URL}/albums/${id}/tracks`)
    .then(response => response.json())
    .then(response => {
      return response.results;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getUser = id => {
  return fetch(`${BASE_URL}/users/${id}`)
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getGlobalSearch = terms => {
  return fetch(`${BASE_URL}/search?q=${terms.split(" ").join("+")}`)
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const addFollowing = followedId => {
  return fetch(`${BASE_URL}/follow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: followedId
    })
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err.message);
    });
};


