import MovieList from '../Components/MovieList/MovieList';
import '../App.css';

const HomePage = ({ movies }) => {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;




