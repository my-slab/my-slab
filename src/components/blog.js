import React from 'react'

function Post(props) {
  let { content, title, pubDate, link } = props
  let formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  }).format(new Date(pubDate))
  let formattedContent = content.split('\n')[0] + '...'

  return (
    <>
      <tr>
        <td>
          <bold>{title}</bold> on <i>{formattedDate}</i>
        </td>
      </tr>
      <tr>
        <td>
          <span dangerouslySetInnerHTML={{ __html: formattedContent }} />
          <a href={link}> See more</a>
        </td>
      </tr>
    </>
  )
}

function _Blog(props) {
  let { data } = props

  return (
    <table>
      <tbody>
        {data.map((post) => {
          let { id } = post
          return <Post key={id} {...post} />
        })}
      </tbody>
    </table>
  )
}

/**
 * @example
 * <Blog data={{...}} />
 */
export function Blog(props) {
  let { data } = props

  return (
    <section>
      <h4>📰 I love coding</h4>
      <p>Read what I've been up to</p>
      <_Blog data={data} />
      <span>
        View my <a href="https://world.hey.com/mitch.stewart/">blog</a>
      </span>
    </section>
  )
}
