import { useSelector } from 'react-redux';

function Table() {
  const wallet = useSelector((state: any) => state.wallet);
  const { expenses } = wallet;

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp: any) => {
          return (
            <tr key={ exp.id }>
              <td>{ exp.description }</td>
              <td>{ exp.tag }</td>
              <td>{ exp.method }</td>
              <td>{ Number(exp.value).toFixed(2) }</td>
              <td>{ exp.exchangeRates[exp.currency].name }</td>
              <td>{ Number(exp.exchangeRates[exp.currency].ask).toFixed(2) }</td>
              <td>
                { (Number(exp.exchangeRates[exp.currency].ask) * Number(exp.value))
                  .toFixed(2) }
              </td>
              <td>Real</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
