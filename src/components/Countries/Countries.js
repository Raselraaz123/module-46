import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  },[])
  return (
    <div>
      <h1 className='toh'>Hello countries</h1>
      <h1 className='toh'>total countries : {countries.length}</h1>

      <div className="countries-container">
        {countries.map((country) => (
          <Country country={country}
            key={country.flags.png}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;