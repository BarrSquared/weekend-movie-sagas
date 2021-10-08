import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';




function AddMovie() {
    const dispatch = useDispatch();
    const history = useHistory();
    const genreList = useSelector(store => store.genres)

    const [ newMovie, setNewMovie ] = useState({
        title: '', poster: '', description: '', genres: '',
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
        
        dispatch({type: 'ADD_MOVIE', payload: newMovie});
        history.push("/");
    }

    const handleCancel = () => {
        history.push("/");
    }    

    const setGenre = (event) => {
        setNewMovie({...newMovie, genres: event.target.value});
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
                <select selected value={genreList} onChange={setGenre}>
                    <option value={1}>Adventure</option>
                    <option value={2}>Animated</option>
                    <option value={3}>Biographical</option>
                    <option value={4}>Comedy</option>
                    <option value={5}>Disaster</option>
                    <option value={6}>Drama</option>
                    <option value={7}>Epic</option>
                    <option value={8}>Fantasy</option>
                    <option value={9}>Musical</option>
                    <option value={10}>Romantic</option>
                    <option value={11}>Science Fiction</option>
                    <option value={12}>Space-Opera</option>
                    <option value={13}>Superhero</option>
                </select>
                <button onClick={handleCancel}>Cancel</button>
                <button type="submit">Save</button>    
            </form>
        </>
    )
}

export default AddMovie;

// - [X] an input field (for the movie title)
// - [X] an input field (for the movie poster image URL))
// - [X] a textarea (for the movie description)
// - [] a dropdown (for the genres)

// The Add Movie page should have the buttons:

// - [X] `Cancel` button, which should bring the user to the Home/List Page
// - [] `Save` button, which should save these inputs in the database and 
// bring the user to the Home/List Page (which now has the new movie)