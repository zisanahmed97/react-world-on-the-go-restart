import React from 'react';

const Country = ({country}) => {
    
    return (
        <div>
             <img src={country.flags.flags.png} alt="" />
            <h2>name:{country.name.common}</h2>
            <h4>Capital:{country.capital.capital}</h4>
        </div>
    );
};

export default Country;