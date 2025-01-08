import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon }) => {
  // Extracting ID from the URL to display the image
  const getPokemonImage = (url) => {
    const id = url.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow">
      {/* Pokémon Image */}
      <img
        src={getPokemonImage(pokemon.url)}
        alt={pokemon.name}
        className="w-full h-32 object-contain"
      />

      {/* Pokémon Name */}
      <h2 className="text-lg font-bold capitalize text-center my-2">
        {pokemon.name}
      </h2>

      {/* View Details Button */}
      <div className="text-center">
        <Link
          to={`/pokemon/${pokemon.name}`}
          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
