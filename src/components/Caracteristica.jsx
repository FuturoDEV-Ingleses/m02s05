import PropTypes from 'prop-types';

import './Caracteristica.css';

export const Caracteristica = ({ title, list }) => {
  return (
    <div>
      <h4 className='title'>{title}</h4>

      <ul className='list'>
        <li>- {list[0]}</li>
        {list[1] && <li>- {list[1]}</li>}
        {list.length > 2 && <li>{`+${list.length - 2}`}</li>}
      </ul>
    </div>
  );
};

Caracteristica.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string),
};
