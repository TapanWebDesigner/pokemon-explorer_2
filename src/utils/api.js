import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = (limit = 50) =>
  axios.get(`${BASE_URL}/pokemon?limit=${limit}`);

export const fetchPokemonDetails = (name) =>
  axios.get(`${BASE_URL}/pokemon/${name}`);
