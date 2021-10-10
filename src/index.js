import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', postNewMovie);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('FETCH_GENRES_DETAILS', fetchGenreDetails);
}

function* fetchGenreDetails(action) {
    try {
        console.log('in fetchGenreDetails, action: ', action);
        const genreResponse = yield axios.get('/api/genre/genreDetails')
        console.log('in fetchGenreDetails, action: ', genreResponse.data);
        yield put ({type: 'SET_GENRES', payload: genreResponse.data})
    } catch(error) {
        console.log('ERROR in fetching genres for details page', error);
    }
}

function* fetchDetails(action) {
    try {
        console.log('fetchDetails action, ', action);
        const movieItemDetails = action.payload;
        const details = yield axios.get(`/api/movie/movieDetails/${movieItemDetails.id}`);
        console.log('FETCH details', details.data);
        yield put({type: 'DETAILS', payload: details.data})
    } catch(error) {
        console.log('Error in FETCH details', error);
    }
}

function* postNewMovie(action) {
    try {
        console.log('Action from postNewMovie: ', action)
        const newMovie = action.payload;
        yield axios.post('/api/movie', newMovie); // line 51 was SET_MOVIES
        yield put({type: 'SET_MOVIES'}); //fix//TODO: rethink where this is going and what it's doing
    } catch(error) {
        console.log('Error in post movie', error);
    }
}

function* fetchGenres(action) {
    
    try {
        console.log('fetchGenres action, ', action);
        const genres = yield axios.get('/api/genre/genreDetails');
        console.log('FETCH genres', genres.data);
        yield put({type: 'SET_GENRES', payload: genres.data})
    } catch(error) {
        console.log('Error in FETCH genres', error);
    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store selected movie details
const movieDetails = (state = [], action) => {
    switch (action.type) {
        case 'DETAILS':
            return action.payload;
        default: 
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
