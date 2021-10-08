import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';




function AddMovie() {
    const dispatch = useDispatch();
    const history = useHistory();
    const genreList = useSelector(store => store.genres)

    const [ newMovie, setNewMovie ] = useState({
        title: '', poster: '', description: '', genres: []
    });

    function fetchGenres() {
        dispatch({type: 'FETCH_GENRES'});
    }

    useEffect(() => {
        console.log('in useEffect');
        fetchGenres();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(newMovie.genres.length != 0) {
            dispatch({type: 'ADD_MOVIE', payload: newMovie});
            history.push("/");
        } else {
            alert('You must select a movie genre')
            return;
        }
    }

    const genreArray = (event) => {
        const checkId = event.target.value;
        if(checkId == 'MENU') {
            return;
        }

        for (let id of newMovie.genres) {
            if(id == checkId) {
                return;
            }
        }
        setNewMovie({...newMovie, genres: [...newMovie.genres, event.target.value]})
    }

    const handleCancel = () => {
        history.push("/");
    }    

    return(
        <>
            <h2>Add a Movie</h2>
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
                <input
                required
                type='text'
                placeholder='Url'
                value={newMovie.poster}
                onChange={ (event) => 
                setNewMovie({...newMovie, poster: event.target.value})}
                />
                <select 
                required 
                label="Select Genres" 
                onChange={(event) => genreArray(event)}>
                    <option value='MENU'>Genre</option>
                    {genreList.map((genre) =>{
                        return(<option key={genre.id} value={genre.id}>{genre.name}</option>);
                    })}
                </select>
                <button onClick={handleCancel}>Cancel</button>
                <button type="submit">Save</button>    
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