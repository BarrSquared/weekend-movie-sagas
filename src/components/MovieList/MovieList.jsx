import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const addMovieLink = () => {
        history.push('/addMovie')
    }

    const movieDetailsLink = (movie) => {
        dispatch({ type: 'FETCH_DETAILS', payload: movie })
        dispatch({ type: 'FETCH_GENRES', payload: movie })
        history.push('/MovieDetails')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={addMovieLink}>Add New Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieItem movie={movie}/>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;