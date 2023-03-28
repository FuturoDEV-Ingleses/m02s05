import { Button } from '../components/Button';
import { Propriedades } from '../components/Propriedades';

export const Aula2 = () => {
  const variavel = 'Sou uma variável';

  return (
    <div>
      <h2>Aula 02</h2>

      <Button type='button'>Acessar</Button>
      <Button />
      <Button>
        <span>@</span> Teste
      </Button>

      <Propriedades
        nome='Sou uma string'
        numero={1.4}
        boleano={false}
        literal={`Olá ${variavel}`}
        componente={<p>Sou um componente</p>}
        array={['Sou um array', 'Sou o item 2']}
        objeto={{ descricao: 'Sou um objeto' }}
      />
    </div>
  );
};
