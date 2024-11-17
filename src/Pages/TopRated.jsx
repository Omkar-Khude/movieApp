import React from 'react';
import MovieList from '../Components/MovieList/MovieList';

const TopRated = ({ movies }) => {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRated;
