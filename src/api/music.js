import fetch from 'isomorphic-unfetch';

const options = {
  key: process.env.LAST_FM_KEY,
  limit: '5',
  period: '7day',
  user: 'mylsb',
};
const LAST_FM_ARTISTS_URL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&period=${options.period}&limit=${options.limit}&user=${options.user}&api_key=${options.key}&format=json`;

/**
 * @example
 *
 * let music = await getMusic()
 */
export async function getMusic() {
  return fetch(LAST_FM_ARTISTS_URL)
    .then(toJSON)
    .then(async (data) => {
      let {
        topartists: { artist: _artists },
      } = data;

      let artists = [];
      for (let artist of _artists) {
        let { mbid: id, name } = artist;
        let image = await getTopAlbums(name);
        artists.push({ id, image, name });
      }

      return artists;
    });
}

async function getTopAlbums(artist) {
  artist = encodeURIComponent(artist);
  const LAST_FM_ALBUMS_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${options.key}&format=json`;

  return fetch(LAST_FM_ALBUMS_URL)
    .then(toJSON)
    .then((data) => {
      let {
        topalbums: { album: albums },
      } = data;

      let index = artist === 'Sky Ferreria' ? 1 : 0;
      return albums[index].image[2]['#text'];
    });
}

function toJSON(r) {
  return r.json();
}
