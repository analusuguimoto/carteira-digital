import { useSelector } from 'react-redux';

type RootState = {
  user: any;
};

function Header() {
  const userEmail = useSelector((user: RootState) => user);
  const { expenses } = useSelector((state: any) => state.wallet);

  const totalValue = expenses.reduce((accumulator: any, current: any) => {
    console.log(current);
    return accumulator
    + Number(current.value)
    * Number(current.exchangeRates[current.currency].ask);
  }, 0);

  return (
    <header>
      <p data-testid="email-field">
        { userEmail.user.email }
      </p>
      <p data-testid="total-field">
        {totalValue.toFixed(2)}
      </p>
      <p data-testid="header-currency-field">
        BRL
      </p>
    </header>
  );
}

export default Header;
