import logo from './logo.svg';
import MovieList from './components/MovieList';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movie from './Pages/Movie';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MovieList />} />
      <Route path='/movie/:id' element={<Movie />} />
    </Routes>
  );
}

export default App;
