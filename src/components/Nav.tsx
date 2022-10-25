import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/about">
        <p>About</p>
      </NavLink>
    </div>
  );
};

export default Nav;
