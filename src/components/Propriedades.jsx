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
      <p>{boleano.toString()}</p>
      <p>{literal}</p>
      {componente}
      <p>{variavel}</p>
      <p>{objeto.descricao}</p>
      <p>{array.join(' - ')}</p>
    </div>
  );
};
