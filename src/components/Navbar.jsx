import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* App Title */}
        <h1 className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-blue-300">
            Pokémon Explorer
          </NavLink>
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-300 font-bold'
                : 'text-white hover:text-yellow-300'
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-300 font-bold'
                : 'text-white hover:text-yellow-300'
            }
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
