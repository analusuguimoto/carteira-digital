// import { currencyAPI } from "../helpers/currencyAPI";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencies, getAllCurrencyInfo } from '../redux/actions';

function WalletForm() {
  const dispatch = useDispatch();
  const { wallet }: any = useSelector((state) => state);
  const [expenseValue, setExpenseValue] = useState('');
  const [description, setDescription] = useState('');
  const [curr, setCurr] = useState('USD');
  const [paymethod, setPayMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('Alimentação');

  // console.log(wallet);

  const APITheCurrencies = async () => {
    await dispatch(getCurrencies());
  };

  useEffect(() => {
    APITheCurrencies();
  }, []);

  const clearForm = () => {
    setExpenseValue('');
    setDescription('');
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    const formFilled = {
      id: wallet.expenses.length,
      value: expenseValue,
      description,
      currency: curr,
      method: paymethod,
      tag,
    };

    dispatch(getAllCurrencyInfo(formFilled));

    clearForm();
  };

  return (
    <form
      onSubmit={ handleSubmit }
    >

      <input
        type="text"
        placeholder="Digite o valor da despesa"
        data-testid="value-input"
        value={ expenseValue }
        onChange={ (event) => setExpenseValue(event.target.value) }
      />

      <input
        type="text"
        placeholder="Descreva a sua despesa"
        data-testid="description-input"
        value={ description }
        onChange={ (event) => setDescription(event.target.value) }
      />

      <select
        data-testid="currency-input"
        onChange={ (event) => setCurr(event.target.value) }
      >
        {wallet.currencies.map((currency: any) => (
          <option key={ currency }>{currency}</option>
        ))}
      </select>

      <select
        data-testid="method-input"
        onChange={ (event) => setPayMethod(event.target.value) }
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>

      <select
        data-testid="tag-input"
        onChange={ (event) => setTag(event.target.value) }
      >
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>

      <button>Adicionar despesa</button>

    </form>
  );
}

export default WalletForm;
