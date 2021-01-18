import React from 'react';
import ReactDOM from 'react-dom/server';
import fs from 'fs';

import { Readme } from './components';
import { getMovies, getMusic } from './api';

(async function () {
  let movies = await getMovies();
  let music = await getMusic();
  let riding = undefined;

  let markdown = ReactDOM.renderToStaticMarkup(
    <Readme {...{ movies, music, riding }} />
  );

  fs.writeFileSync('./README.md', markdown);
})();
