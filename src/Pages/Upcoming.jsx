import React from 'react';
import MovieList from '../Components/MovieList/MovieList';

const Upcoming = ({ movies }) => {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Upcoming;

