import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movie = useSelector(store => store.movieDetails);
    const genre = useSelector(store => store.genres);

    const movieListLink = () => {
        history.push('/MovieList')
    }

    let displayMovie = genre.movie

    return(         
        <>
            <h1>Movie Genres</h1>
                
            <button onClick={movieListLink}>Back to List</button>
        </>
    )
}

export default MovieDetails;