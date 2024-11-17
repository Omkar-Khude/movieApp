
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Pages/HomePage';
import Upcoming from './Pages/Upcoming';
import TopRated from './Pages/TopRated';
import MovieDetail from './Pages/MovieDetail/MovieDetail'
import axios from 'axios';
import './App.css';

const App = () => {
  const api_key = 'c45a857c193f6302f2b5061c3b85e743'; // Replace with your actual API key.

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getPopular();
    getTopRated();
    getUpcoming();
  }, []);

  const getPopular = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US`
      );
      setPopularMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  const getTopRated = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`
      );
      setTopRatedMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching top-rated movies:', error);
    }
  };

  const getUpcoming = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US`
      );
      setUpcomingMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filterMovies = (movies) => {
    if (!searchQuery) return movies;
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery)
    );
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={<HomePage movies={filterMovies(popularMovies)} />}
        />
        <Route
          path="/top-rated"
          element={<TopRated movies={filterMovies(topRatedMovies)} />}
        />
        <Route
          path="/upcoming"
          element={<Upcoming movies={filterMovies(upcomingMovies)} />}
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
