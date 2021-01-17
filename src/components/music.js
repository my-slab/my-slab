import React from 'react';

export function Artist(props) {
  let { name, image } = props;

  return (
    <td>
      <img src={image} height="150px" alt={`Publicity photo of ${name}`} />
      <br />
      {name}
    </td>
  );
}

export function Music(props) {
  let { data } = props;

  return (
    <table>
      <tbody>
        {data.map((artist) => {
          let { image, mbid, name } = artist;
          image = image[2]['#text'];
          return <Artist key={mbid} name={name} image={image} />;
        })}
      </tbody>
    </table>
  );
}
