import React from 'react'

function Post(props) {
  let { content, title } = props

  return (
    <tr>
      <td>
        {title}
        <br />
        <span dangerouslySetInnerHTML={{ __html: content }} />
      </td>
    </tr>
  )
}

function _Blog(props) {
  let { data } = props

  return (
    <table>
      <tbody>
        {data.map((movie) => {
          let { content, id, title } = movie
          return <Post key={id} {...{ content, title }} />
        })}
      </tbody>
    </table>
  )
}

/**
 * @example
 * <Movies data={{...}} />
 */
export function Blog(props) {
  let { data } = props

  return (
    <section>
      <h4>📰 I love coding</h4>
      <p>Read what I've been up to</p>
      <_Blog data={data} />
      <span>
        View my <a href="https://world.hey.com/mitch.stewart/">My blog</a>
      </span>
    </section>
  )
}
