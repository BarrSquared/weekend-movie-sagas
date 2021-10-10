import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieItem({movie}) {
    const history = useHistory();
    const dispatch = useDispatch(); 

    const movieDetailsLink = (movie) => {
        dispatch({ type: 'FETCH_DETAILS', payload: movie })
        // dispatch({ type: 'FETCH_GENRES', payload: movie })
        history.push('/MovieDetails')
    }

    return (
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img onClick={() => movieDetailsLink(movie)} src={movie.poster} alt={movie.title} />
        </div>
    );
}

export default MovieItem;