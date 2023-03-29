import PropTypes from 'prop-types';

import logo from '../assets/react.svg';

export const Header = ({ title = 'Blog React' }) => {
  return (
    <header style={{ display: 'flex', gap: '10px' }}>
      <img alt='Logo' src={logo} />
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
