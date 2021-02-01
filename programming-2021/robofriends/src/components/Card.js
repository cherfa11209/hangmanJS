import React from 'react';

const Card = ({ name, email, id}) => {
    return (
        <div className="bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}?set=set4`} alt="robotfriend" />
            <h2> {name} </h2>
            <p> {email} </p>
        </div>
    )
}

export default Card;