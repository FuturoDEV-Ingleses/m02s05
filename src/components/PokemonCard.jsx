import PropTypes from 'prop-types';
import { Caracteristica } from './Caracteristica';

import './PokemonCard.css';

export const PokemonCard = ({ nome, imagem, tipos, habilidades, fraquesas }) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img alt='Imagem do pokémon' src={imagem} width={100} />
      </div>

      <h3 className='card-title'>{nome}</h3>

      <Caracteristica title='Tipo:' list={tipos} />
      <Caracteristica title='Habilidades:' list={habilidades} />
      <Caracteristica title='Fraquesas:' list={fraquesas} />
    </div>
  );
};

PokemonCard.propTypes = {
  nome: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  tipos: PropTypes.arrayOf(PropTypes.string).isRequired,
  habilidades: PropTypes.arrayOf(PropTypes.string).isRequired,
  fraquesas: PropTypes.arrayOf(PropTypes.string).isRequired,
};
