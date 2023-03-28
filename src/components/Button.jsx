// Importação nomeada
// import { Button } from './Button'
export function Button({ children = 'Enviar', type = 'submit' }) {
  // console.log(text, type);

  const handleClick = () => {
    console.log('Clicou no botão');
  };

  return (
    <button onClick={handleClick} type={type}>
      {children}
    </button>
  );
}

// export default Button;
// Importação default
// import Button from './Button'

// const Button = () => {
//   return <button>Enviar</button>;
// };
