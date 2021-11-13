import React from 'react'
import ReactDOM from 'react-dom/server'
import fs from 'fs'

import { Readme } from './components'
import { getMovies, getMusic, getPosts } from './api'
;(async function () {
  let movies = await getMovies()
  let music = await getMusic()
  let blog = await getPosts()

  let markdown = ReactDOM.renderToStaticMarkup(
    <Readme {...{ blog, movies, music }} />
  )

  fs.writeFileSync('./README.md', markdown)
})()
