import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Propriedades } from '../components/Propriedades';
import { Todo } from '../components/Todo';

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
        variavel={variavel}
      />

      <Propriedades
        nome='React'
        numero={10}
        boleano={true}
        literal={`${variavel}`}
        array={['teste']}
        componente={<p>Ola</p>}
        variavel={variavel}
        objeto={{ descricao: 'Objeto' }}
      />

      <hr />

      <Header title='Todo List' />

      <Todo todoItem={{ descricao: 'Estudar PropTypes', concluido: false }} />
      <Todo todoItem={{ descricao: 'Estudar como criar um componente React', concluido: true }} />
      <Todo todoItem={{ descricao: 'Estudar como criar um projeto React', concluido: true }} />
    </div>
  );
};
