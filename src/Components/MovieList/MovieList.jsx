import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies && movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-link">
          <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-poster" />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;

