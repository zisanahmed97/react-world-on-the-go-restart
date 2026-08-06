import React, { use, useState } from 'react';
import Country from './Country';
import  "../Countries/Countries.css"

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries]= useState([]);

    const handleVisitedCountries=(country)=>{
        console.log("visited country clicked",country)
    }


   
    return (
        <div >
            <h2>In your dream country</h2>
            <h3>Total visited countries:{visitedCountries}</h3>
             <h2>Countries:{countries.length}</h2>
<div className="countries">
    
             {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
             }
</div>
        </div>
    );
};

export default Countries;