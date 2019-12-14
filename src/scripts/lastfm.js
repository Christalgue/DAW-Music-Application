const BASE_URL = "http://ws.audioscrobbler.com/2.0/?";
const LAST_FM_API_KEY = "9fee80eb0f0bf9b630759f422d91e45e"

export const getBiography = artistName => {
  let queryUrl = `${BASE_URL}method=artist.getinfo&artist=${artistName}&api_key=${LAST_FM_API_KEY}&format=json`;
  console.log(queryUrl);
  return fetch(queryUrl)
    .then(response => response.json())
    .then(artistData => {
      return artistData.artist.bio;
    })
    .catch(err => {
      console.log(err.message);
    });
};
