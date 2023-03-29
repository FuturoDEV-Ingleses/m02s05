import PropTypes from 'prop-types';

export const Propriedades = ({
  nome,
  numero,
  boleano,
  literal,
  componente,
  variavel,
  objeto,
  array,
}) => {
  return (
    <div>
      <p>{nome}</p>
      <p>{numero}</p>
      <p>{boleano?.toString()}</p>
      <p>{literal}</p>
      {componente}
      <p>{variavel}</p>
      <p>{objeto?.descricao}</p>
      <p>{array?.join(' - ')}</p>
    </div>
  );
};

Propriedades.propTypes = {
  nome: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
  boleano: PropTypes.bool.isRequired,
  literal: PropTypes.string.isRequired,
  componente: PropTypes.node.isRequired,
  variavel: PropTypes.any.isRequired,
  // objeto: PropTypes.object.isRequired
  objeto: PropTypes.shape({
    descricao: PropTypes.string.isRequired,
  }).isRequired,
  // array: PropTypes.array.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
};
