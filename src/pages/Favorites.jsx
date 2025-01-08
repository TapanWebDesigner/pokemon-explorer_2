import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Retrieve favorites from local storage on component mount
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Remove a Pokémon from favorites
  const removeFavorite = (name) => {
    const updatedFavorites = favorites.filter((pokemon) => pokemon.name !== name);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Render
  if (favorites.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
        <p className="text-gray-600">No favorite Pokémon yet!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Favorites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map((pokemon) => (
          <div
            key={pokemon.name}
            className="border border-gray-300 rounded-lg p-4 flex flex-col items-center"
          >
            {/* Pokémon Image */}
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-24 h-24 object-contain mb-2"
            />

            {/* Pokémon Name */}
            <h2 className="text-lg font-bold capitalize mb-2">{pokemon.name}</h2>

            {/* Remove Button */}
            <button
              onClick={() => removeFavorite(pokemon.name)}
              className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
