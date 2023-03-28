// Importação nomeada
// import { Button } from './Button'
export function Button() {
  const handleClick = () => {
    console.log('Clicou no botão');
  };

  return <button onClick={handleClick}>Enviar</button>;
}

// export default Button;
// Importação default
// import Button from './Button'

// const Button = () => {
//   return <button>Enviar</button>;
// };
