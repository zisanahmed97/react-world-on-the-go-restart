import React, { useState } from 'react';
import  "../Countries/Country.css"

const Country = ({country, handleVisitedCountries}) => {

    const [visited, setVisited] = useState(false)
   const handleClick = () =>{
    setVisited(!visited);
    handleVisitedCountries(country);
   }
    return (
        <div className={`country ${visited && `country-card`}`}>
             <img src={country.flags.flags.png} alt="" />
            <h2>name:{country.name.common}</h2>
            <h4>Capital:{country.capital.capital}</h4>
            <p>Area:{country.area.area} <br />
                {
                    country.area.area > 3000 ? "big country" : "small country"
                }
            </p>
             <button onClick={handleClick}>
                {
                    visited ? " visited" : " not visited"
                }
             </button>
        </div>
    );
};

export default Country;