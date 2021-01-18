import React from 'react';

function Artist(props) {
  let { name, image } = props;

  return (
    <td>
      <img src={image} height="150px" alt={`Publicity photo of ${name}`} />
      <br />
      {name}
    </td>
  );
}

function Artists(props) {
  let { data } = props;

  return (
    <table>
      <tbody>
        {data.map((artist) => {
          let { image, mbid, name } = artist;
          image = image[2]['#text'];
          return <Artist key={mbid} {...{ image, name }} />;
        })}
      </tbody>
    </table>
  );
}

/**
 * @example
 * <Music data={{...}} />
 */
export function Music(props) {
  let { data } = props;

  return (
    <section>
      <h4>💽 I love music</h4>
      <p>Recently I've been listening to</p>
      <Artists data={data} />
      <span>
        View my <a href="https://www.last.fm/user/mylsb">last.fm profile</a>
      </span>
    </section>
  );
}
