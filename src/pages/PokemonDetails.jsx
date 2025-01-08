import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonDetails = () => {
  const { name } = useParams(); // Extract the Pokémon name from the URL
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Pokémon details
  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load Pokémon details. Please try again.');
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  // Save Pokémon to favorites
  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav.name === pokemon.name)) {
      favorites.push({ name: pokemon.name, image: pokemon.sprites.front_default });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${pokemon.name} has been added to your favorites!`);
    } else {
      alert(`${pokemon.name} is already in your favorites.`);
    }
  };

  // Loading and Error Handling
  if (loading) return <p>Loading Pokémon details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  // Render Pokémon Details
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center capitalize mb-6">{pokemon.name}</h1>

      <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-8">
        {/* Pokémon Image */}
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-48 h-48 object-contain mb-4 md:mb-0"
        />

        {/* Pokémon Info */}
        <div className="text-left">
          {/* Abilities */}
          <h2 className="text-xl font-semibold mb-2">Abilities:</h2>
          <ul className="list-disc pl-5 mb-4">
            {pokemon.abilities.map((ability, index) => (
              <li key={index} className="capitalize">{ability.ability.name}</li>
            ))}
          </ul>

          {/* Types */}
          <h2 className="text-xl font-semibold mb-2">Types:</h2>
          <ul className="list-disc pl-5 mb-4">
            {pokemon.types.map((type, index) => (
              <li key={index} className="capitalize">{type.type.name}</li>
            ))}
          </ul>

          {/* Base Stats */}
          <h2 className="text-xl font-semibold mb-2">Base Stats:</h2>
          <ul className="list-disc pl-5 mb-4">
            {pokemon.stats.map((stat, index) => (
              <li key={index}>
                <span className="capitalize">{stat.stat.name}</span>: {stat.base_stat}
              </li>
            ))}
          </ul>

          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
