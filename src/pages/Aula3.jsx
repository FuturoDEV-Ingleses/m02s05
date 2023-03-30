import { Todo } from '../components/Todo';

export const Aula3 = () => {
  const isLoading = true;
  const errorMessage = 'Teste';
  const todoLists = [
    {
      id: 1,
      descricao: 'Estudar React',
      concluido: false,
    },
    {
      id: 2,
      descricao: 'Estudar JS',
      concluido: true,
    },
    {
      id: 3,
      descricao: 'Estudar HTML',
      concluido: false,
    },
  ];

  const numeros = [1, 2, 3, 4, 5, 678, 9, 9];

  //   if (isLoading) {
  //     return (
  //       <div>
  //         <p>Carregando...</p>
  //       </div>
  //     );
  //   }

  return (
    <>
      <div>
        <h2>Aula 03</h2>

        {isLoading ? <p>Carregando...</p> : <p>Carregamento concluído.</p>}

        {isLoading && <p>Carregando...</p>}

        {!isLoading && <p>Carregamento concluído.</p>}

        <p>{isLoading ? 'Carregando...' : 'Carregamento finalizado'}</p>

        <p>{errorMessage || 'Erro não tratado'}</p>

        <p>{!isLoading && errorMessage && 'Erro não tratado'}</p>

        <p>{(!isLoading || errorMessage) && 'Erro não tratado'}</p>
      </div>

      <ul>
        {todoLists.map((item) => {
          return (
            <li key={item.id}>
              <Todo todoItem={item} />
              {/* {item.descricao}
              {item.finalizado ? ' - Feito' : ' - A fazer'}
              <input type='checkbox' defaultChecked={item.finalizado} /> */}
            </li>
          );
        })}
      </ul>

      <ul>
        {numeros.map((numero, index) => {
          // console.log(numero, index);
          return (
            <li key={index} className='teste'>
              {numero}
            </li>
          );
        })}
      </ul>
    </>
  );
};
