import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import icon from './search.svg';
import MovieCard from './card';

// API key - cfc550eb


const APIURL ='http://www.omdbapi.com/?i=tt3896198&apikey=cfc550eb'
// const moive1={
    
//         "Title": "Batman",
//         "Year": "1989",
//         "imdbID": "tt0096895",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
    
// }
const App=()=>{

    const [movie,setMovie] = useState([])
    const [Searchterm,setSearchterm] = useState('');


    const searchMoives = async(title)=>{
        const response = await fetch(`${APIURL}&s=${title}`);
        const data = await response.json();

        setMovie(data.Search);
        // console.log(data.Search);
    }

    useEffect(()=>{
        searchMoives('batman')
    },[])

    return(
        <div className="app">
            <h1>FilMov</h1>
            <h2>Search your movie POSTER</h2>
            <div className="search">
        <input 
            className="search-mov" 
            placeholder="Search for moive"
            value={Searchterm}
            onChange={(e)=>{
                setSearchterm(e.target.value)
            }}
        />
        <img src={icon} onClick={()=>searchMoives(Searchterm)}></img>
            </div> 
{
    movie?.length > 0
    ?(
        <div className="container">
        {
            movie.map((moive)=>(
                <MovieCard moive={moive}/>
            ))
        }
    </div>
    
    ):(
      <div className="empty">
        <h2>No moives found</h2>
      </div>  
    )
}
       </div>
    );
}


export default App;