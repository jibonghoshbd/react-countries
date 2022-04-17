import React from 'react';
import './Country.css';
const Country = (props) => {
    const { flag, name, capital, alpha3Code, region, population } = props.country;
    return (
        <div>
            <img src={flag} alt="" />
            <h2>Name: {name}</h2>
            <h3>Capital: {capital}</h3>
            <p>Alpha3Code: {alpha3Code}</p>
            <span>Region: {region}</span>. <span>Population: {population}</span>
        </div>
    );
};

export default Country;