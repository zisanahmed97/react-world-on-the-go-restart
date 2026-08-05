import React, { use } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

    console.log(countries);
    return (
        <div>
            <h2>In your dream country</h2>
             <h2>Countries:{countries.length}</h2>

             {
                countries.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
             }
        </div>
    );
};

export default Countries;