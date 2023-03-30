import { PokemonCard } from '../components/PokemonCard';

import './PraticaAula3.css';

export const PraticaAula3 = () => {
  const pokemons = [
    {
      name: 'Charizard',
      image: 'https://img.pokemondb.net/artwork/charizard.jpg',
      type: ['Fogo', 'Voador'],
      abilities: ['Blaze', 'Solar Power'],
      weaknesses: ['Elétrico', 'Rocha', 'Água'],
    },
    {
      name: 'Squirtle',
      image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
      type: ['Água'],
      abilities: ['Torrent', 'Rain Dish'],
      weaknesses: ['Elétrico', 'Grama'],
    },
    {
      name: 'Bulbasaur',
      image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
      type: ['Grama', 'Veneno'],
      abilities: ['Overgrow', 'Chlorophyll'],
      weaknesses: ['Fogo', 'Psíquico', 'Gelo', 'Voador'],
    },
    {
      name: 'Bulbasaur 2',
      image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
      type: ['Grama', 'Veneno'],
      abilities: ['Overgrow', 'Chlorophyll'],
      weaknesses: ['Fogo', 'Psíquico', 'Gelo', 'Voador'],
    },
    {
      name: 'Bulbasaur 3',
      image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
      type: ['Grama', 'Veneno'],
      abilities: ['Overgrow', 'Chlorophyll'],
      weaknesses: ['Fogo', 'Psíquico', 'Gelo', 'Voador'],
    },
    {
      name: 'Bulbasaur 4',
      image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
      type: ['Grama', 'Veneno'],
      abilities: ['Overgrow', 'Chlorophyll'],
      weaknesses: ['Fogo', 'Psíquico', 'Gelo', 'Voador'],
    },
    {
      name: 'Bulbasaur 5',
      image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
      type: ['Grama', 'Veneno'],
      abilities: ['Overgrow', 'Chlorophyll'],
      weaknesses: ['Fogo', 'Psíquico', 'Gelo', 'Voador'],
    },
  ];

  return (
    <div className='lista-pokemons'>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          nome={pokemon.name}
          imagem={pokemon.image}
          fraquesas={pokemon.weaknesses}
          habilidades={pokemon.abilities}
          tipos={pokemon.type}
        />
      ))}
    </div>
  );
};
