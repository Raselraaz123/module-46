import React from 'react';
import './Country.css'
const Country = (props) => {
  const { name, area, flags, maps } = props.country
    ;
  return (
    <div className="country">
      <h1>Country : {name.common}</h1>
      <p>area : {area}</p>
      <img src={flags.png} alt="" />
      <br />

      <a className="a-style" href={maps.googleMaps}>
        go to google maps
      </a>
    </div>
  );
};

export default Country;