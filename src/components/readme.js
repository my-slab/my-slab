import React from 'react'

import { Music } from './music'

export function Readme(props) {
  let { music } = props

  return (
    <article>
      <h3>I'm Mitch</h3>
      <section>
        <p>👨 he/him</p>
        <p>📍 Melbourne, Australia</p>
      </section>
      <hr />
      <Music data={music} />
    </article>
  )
}
