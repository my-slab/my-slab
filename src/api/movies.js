import Parser from 'rss-parser';

const options = { user: 'myslab' };
const LETTERBOXD_URL = `https://letterboxd.com/${options.user}/rss/`;

/**
 * @example
 *
 * let movies = await getMovies()
 */
export async function getMovies() {
  let parser = new Parser();

  return parser.parseURL(LETTERBOXD_URL).then((feed) => {
    let { items } = feed;
    items = items.slice(0, 5);

    let movies = [];
    for (let item of items) {
      let { content, guid: id, title } = item;
      movies.push({ content, id, title });
    }

    return movies;
  });
}
