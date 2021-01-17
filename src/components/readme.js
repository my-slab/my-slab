import React from 'react';

import { Music } from '../components';

export function Readme(props) {
  let { music, movies, riding } = props;

  return (
    <div>
      <h3>Hey, I'm Mitch ✌️</h3>
      <section>
        <h4>I love music and recently I've been listening to</h4>
        <Music data={music} />
      </section>
      <section>
        <h4>I love movies and recently I've been watching</h4>
        <i>todo</i>
      </section>
      <section>
        <h4>I love riding and recently I've been riding here</h4>
        <i>todo</i>
      </section>
    </div>
  );
}
