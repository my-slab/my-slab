import React from 'react';

import { Movies, Music } from '../components';

export function Readme(props) {
  let { movies, music, riding } = props;

  return (
    <article>
      <h3>Hey, I'm Mitch ✌️</h3>
      <Music data={music} />
      <Movies data={movies} />
    </article>
  );
}
