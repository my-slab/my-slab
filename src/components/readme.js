import React from 'react'

import { Movies } from './movies'
import { Music } from './music'

export function Readme(props) {
  let { movies, music } = props

  return (
    <article>
      <h3>Hey, I'm Mitch ✌️</h3>
      <section>
        <p>🙆‍♂️ he, him</p>
        <p>📍 Melbourne, Australia</p>
      </section>
      <hr />
      <Music data={music} />
      <hr />
      <Movies data={movies} />
    </article>
  )
}
