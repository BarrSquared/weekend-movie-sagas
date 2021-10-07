import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

function MovieDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    const movie = useSelector(store => store.movieDetails);
    const genre = useSelector(store => store.genres);

    const movieListLink = () => {
        history.push('/')
    }

    let displayMovie = genre.movie

    return(         
            <div key={ movie.id }>
            <h1>Movie Genres</h1>
                {/* <p>{ displayMovie.description}</p> */}
                {genre.map( genre => (
                    <p>{genre.name}</p>
                ))}
            <button onClick={movieListLink}>Back to List</button>
            </div>
    )
}

export default MovieDetails;