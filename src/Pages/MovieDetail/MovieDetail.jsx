import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import './MovieDetail.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState()
  const [movieCast, setMovieCast] = useState()
  const castContainerRef = useRef(null);
  const api_key = 'c45a857c193f6302f2b5061c3b85e743';

  const scrollLeft = () => {
    castContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    castContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    getMovieDetails()
  },[])

  const getMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
      );
      setMovie(response.data);
      const cast = await axios.get(
        ` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`
      );
      setMovieCast(cast.data.cast);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-detail">
      <div className="movie-header">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <div className="runtime-box">
    <p>{movie.runtime} min</p>
  </div>
          <p>{movie.genre}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
      <h3>Cast</h3>
      <div style={{ position: "relative", width: "100%" }}>
        <button
          onClick={scrollLeft}
          className="nav-button left"
        >
          ◀
        </button>
        <div
          ref={castContainerRef}
          className="movie-cast"
          style={{ overflow: "hidden" }}
        >
          {movieCast?.map((actor, index) => (
            <div key={index} className="cast-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
              />
              <p>
                <strong>{actor.name}</strong>
              </p>
              <p>Character: {actor.character}</p>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="nav-button right"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;
