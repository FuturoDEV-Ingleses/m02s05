import PropTypes from 'prop-types';

export const Todo = ({ todoItem }) => {
  return (
    <div>
      <input type='checkbox' defaultChecked={todoItem.concluido} />
      <span>{todoItem.descricao}</span>
    </div>
  );
};

Todo.propTypes = {
  todoItem: PropTypes.shape({
    descricao: PropTypes.string.isRequired,
    concluido: PropTypes.bool.isRequired,
  }).isRequired,
};
