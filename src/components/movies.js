import React from 'react';

function Movie(props) {
  let { content, title } = props;

  return (
    <td>
      {title}
      <br />
      <span dangerouslySetInnerHTML={{ __html: content }} />
    </td>
  );
}

function _Movies(props) {
  let { data } = props;

  return (
    <table>
      <tbody>
        {data.map((movie) => {
          let { content, id, title } = movie;
          return <Movie key={id} {...{ content, title }} />;
        })}
      </tbody>
    </table>
  );
}

/**
 * @example
 * <Movies data={{...}} />
 */
export function Movies(props) {
  let { data } = props;

  return (
    <section>
      <h4>📼 I love movies</h4>
      <p>Recently I've been watching</p>
      <_Movies data={data} />
      <span>
        View my <a href="https://letterboxd.com/myslab/">Letterboxd profile</a>
      </span>
    </section>
  );
}
