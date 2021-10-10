import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movieDetails = useSelector(store => store.movieDetails);
    const genres = useSelector(store => store.genres);

    const movieListLink = () => {
        console.log('In MovieDetails ', genres);
        history.push('/')

    }

    return(         
        <>
            <h1>Movie Details</h1>
            <div>{JSON.stringify(movieDetails)}</div>
            {/* <div>{JSON.stringify(genres)}</div> */}
            <h3>{movieDetails.title}</h3>
            <h3>{movieDetails.description}</h3>
            <h4>Genres: </h4>
            {genres.map(genre => (
                <li>{genre.name}</li>
            ))}
            <button onClick={movieListLink}>Back to List</button>
        </>
    )
}

export default MovieDetails;