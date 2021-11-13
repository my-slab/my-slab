import Parser from 'rss-parser'

const HEY_WORLD_URL = `https://world.hey.com/mitch.stewart/feed.atom`

/**
 * @example
 *
 * let blog = await getPosts()
 */
export async function getPosts() {
  let parser = new Parser()

  return parser.parseURL(HEY_WORLD_URL).then((feed) => {
    let { items } = feed
    items = items.slice(0, 5)

    let posts = []
    for (let item of items) {
      let { id, title, link, contentSnippet: content, pubDate } = item
      posts.push({ id, title, link, content, pubDate })
    }

    return posts
  })
}
