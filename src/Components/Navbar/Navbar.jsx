
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">MovieDb</NavLink>
      <div className="navbar-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'active-link' : ''} 
          end
        >
          Popular
        </NavLink>
        <NavLink 
          to="/top-rated" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Top Rated
        </NavLink>
        <NavLink 
          to="/upcoming" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Upcoming
        </NavLink>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Movie Name"
          onChange={handleInputChange}
        />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
