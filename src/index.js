import React from 'react';
import ReactDOM from 'react-dom/server';
import fetch from 'isomorphic-unfetch';
import fs from 'fs';

import { Readme } from './components';

function toJSON(r) {
  return r.json();
}

async function getMusic() {
  const LAST_FM_KEY = '';
  // const LAST_FM_URL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&period=7day&limit=3&user=mylsb&api_key=${process.env.LAST_FM_KEY}&format=json`;
  const LAST_FM_URL = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&period=7day&limit=4&user=mylsb&api_key=${LAST_FM_KEY}&format=json`;

  return fetch(LAST_FM_URL)
    .then(toJSON)
    .then((data) => {
      let {
        topartists: { artist },
      } = data;

      return artist;
    });
}

(async function () {
  let music = await getMusic();
  let movies = undefined;
  let riding = undefined;

  let markdown = ReactDOM.renderToStaticMarkup(
    <Readme {...{ movies, music, riding }} />
  );

  fs.writeFileSync('./README.md', markdown);
})();
