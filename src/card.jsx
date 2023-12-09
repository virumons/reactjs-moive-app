import React from "react"

const Card=({moive})=>{
    return( 
    <div className="movie">
    <div className="yrs">
        <p>{moive.Year}</p>
    </div>
    <div className="img">
        <img src={moive.Poster !=='N/A' ? moive.Poster : 'https://via.placeholder.com/400'}></img>
    </div>
    <div className="type">
        <span>{moive.Type}</span>
        <h3>{moive.Title}</h3>
    </div>
    </div>
    );
}
export default Card;