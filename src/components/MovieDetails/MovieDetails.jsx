import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movie = useSelector(store => store.movieDetails);
    const genre = useSelector(store => store.genre);

    const movieListLink = () => {
        history.push('/')
    }

    let displayMovie = {}
    displayMovie = movie

    return(
        <div key={ movie.id }>
            <p>{ displayMovie.description}</p>
        
        </div>
    )
}

export default MovieDetails;