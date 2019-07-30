import React from 'react';
import noImage from '../img/noImage.png';

const addDefaultSrc = (ev) => {
  ev.target.src = noImage;
};


const Card = (props) => {
  const { elm } = props;
  return (
    <div className="card border border-primary">
      <img
        onError={(ev) => { ev.onerror = null; addDefaultSrc(ev); }}
        src={elm.urlToImage}
        alt=" "
        className="card-img-top"
        style={{ position: 'relative', marginBottom: '-3.8rem', zIndex: 0 }}
      />
      <h3 style={{ zIndex: 10, position: 'relative' }} className="m-0">
        <span style={{
          zIndex: 2000,
          lineHeight: '2.5rem',
          // fontSize: '1.4rem',
          backgroundColor: 'rgba(255, 255, 0, 0.8)',
        }}
        >
          {elm.title}
        </span>
      </h3>
      <p className="m-1">{elm.content ? elm.content.split('[+').shift() : ''}</p>
      <a href={elm.url} className="btn btn-link h4">
        Lire la suite sur {elm.source.name}
      </a>
    </div>
  );
};

export default Card;
