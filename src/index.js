import React from 'react'
import ReactDOM from 'react-dom/server'
import fs from 'fs'

import { Readme } from './components'
import { getMusic } from './api'
;(async function () {
  let music = await getMusic()

  let markdown = ReactDOM.renderToStaticMarkup(
    <Readme {...{ music }} />
  )

  fs.writeFileSync('./README.md', markdown)
})()
