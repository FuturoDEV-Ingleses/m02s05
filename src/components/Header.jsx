import logo from '../assets/react.svg';

export const Header = () => {
  return (
    <header style={{ display: 'flex', gap: '10px' }}>
      <img alt='Logo' src={logo} />
      <h1>Blog React</h1>
    </header>
  );
};
