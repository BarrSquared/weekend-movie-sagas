import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie'
import MovieDetails from '../MovieDetails/MovieDetails'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
          <AddMovie />
          <MovieDetails />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
