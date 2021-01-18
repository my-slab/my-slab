import fetch from 'isomorphic-unfetch';

const options = {
  period: '7day',
  limit: '5',
  user: 'mylsb',
  key: process.env.LAST_FM_KEY,
};
const LAST_FM_URL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&period=${options.period}&limit=${options.limit}&user=${options.user}&api_key=${options.key}&format=json`;

/**
 * @example
 *
 * let music = await getMusic()
 */
export async function getMusic() {
  return fetch(LAST_FM_URL)
    .then((r) => r.json())
    .then(({ topartists: { artist } }) => artist);
}
