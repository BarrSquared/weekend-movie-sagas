import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


function AddMovie() {
    const dispatch = useDispatch();
    const history = useHistory();

    return(
        <>
            <h1>Add a Movie</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    required
                    type='text'
                    placeholder='Title'
                    value={newMovie.title}
                    onChange={ (event) => 
                    setNewMovie({...newMovie, title: event.target.value})}
                />
                <input 
                required
                type='text'
                placeholder='Description'
                value={newMovie.description}
                onChange={ (event) => 
                setNewMovie({...newMovie, description: event.target.value}) }
                />
                <required
                type='text'
                placeholder='Url'
                value={newMovie.poster}
                onChange={ (event) => 
                setNewMovie({...newMovie, poster: event.target.value})}
                />
            </form>
        </>
    )
}

export default AddMovie;

// - [] an input field (for the movie title)
// - [] an input field (for the movie poster image URL))
// - [] a textarea (for the movie description)
// - [] a dropdown (for the genres)

// The Add Movie page should have the buttons:

// - [] `Cancel` button, which should bring the user to the Home/List Page
// - [] `Save` button, which should save these inputs in the database and 
// bring the user to the Home/List Page (which now has the new movie)