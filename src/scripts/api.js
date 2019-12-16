import Cookies from "js-cookie";
const BASE_URL = "https://ubeat.herokuapp.com";
const BASE_URL_UNSECURED = "https://ubeat.herokuapp.com/unsecure";

export const login = (email, password) => {
  const encoded = {
    email: encodeURIComponent(email),
    password: encodeURIComponent(password)
  };
  const body = `email=${encoded.email}&password=${encoded.password}`;
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body
  })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const createUser = (name, email, password) => {
  const encoded = {
    name: encodeURIComponent(name),
    email: encodeURIComponent(email),
    password: encodeURIComponent(password)
  };
  const body = `name=${encoded.name}&email=${encoded.email}&password=${encoded.password}`;
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body
  })
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getPlaylists = email => {
  return fetch(`${BASE_URL}/playlists`, {
    headers: {
      Authorization: Cookies.get("token")
    }
  })
    .then(response => response.json())
    .then(playlists => {
      let ownerPlaylists = [];
      for (let i = 0; i < playlists.length; i++) {
        if (playlists[i]["owner"].email === email) {
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
  return fetch(`${BASE_URL}/playlists/${id}`, {
    headers: {
      Authorization: Cookies.get("token")
    }
  })
    .then(response => response.json())
    .then(playlist => {
      return playlist;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const createPlaylist = (playlistName, email) => {
  return fetch(`${BASE_URL}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: Cookies.get("token")
    },
    body: JSON.stringify({
      name: playlistName,
      owner: email
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

export const renamePlaylist = (newName, tracks, id, email) => {
  return fetch(`${BASE_URL}/playlists/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: Cookies.get("token")
    },
    body: JSON.stringify({
      name: newName,
      owner: email,
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
    method: "DELETE",
    headers: {
      Authorization: Cookies.get("token")
    }
  }).catch(err => {
    console.log(err.message);
  });
};

export const addTrack = (track, id) => {
  return fetch(`${BASE_URL}/playlists/${id}/tracks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: Cookies.get("token")
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
    method: "DELETE",
    headers: {
      Authorization: Cookies.get("token")
    }
  }).catch(err => {
    console.log(err.message);
  });
};

export const getArtist = id => {
  return fetch(`${BASE_URL}/artists/${id}`, {
    headers: {
      Authorization: Cookies.get("token")
    }
  })
    .then(response => response.json())
    .then(response => {
      return response.results[0];
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getArtistAlbums = id => {
  return fetch(`${BASE_URL}/artists/${id}/albums`, {
    headers: {
      Authorization: Cookies.get("token")
    }
  })
    .then(response => response.json())
    .then(response => {
      return response.results;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getAlbum = id => {
  return fetch(`${BASE_URL}/albums/${id}`, {
    headers: {
      Authorization: Cookies.get("token")
    }
  })
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
  return fetch(`${BASE_URL}/albums/${id}/tracks`, {
    headers: {
      Authorization: Cookies.get("token")
    }
  })
    .then(response => response.json())
    .then(response => {
      return response.results;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getUser = id => {
  return fetch(`${BASE_URL}/users/${id}`, {
    headers: {
      Authorization: Cookies.get("token")
    }
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getAllUsers = () => {
  return fetch(`${BASE_URL}/users`, {
    headers: {
      Authorization: Cookies.get("token")
    }
  })
    .then(response => response.json())
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getGlobalSearch = terms => {
  return fetch(`${BASE_URL_UNSECURED}/search?q=${terms.split(" ").join("+")}&limit=30`)
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
      "Content-Type": "application/json",
      Authorization: Cookies.get("token")
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
