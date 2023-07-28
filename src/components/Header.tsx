import { useSelector } from 'react-redux';

type RootState = {
  user: any;
};

function Header() {
  const userEmail = useSelector((user: RootState) => user);
  const totalOfExpenses = 0;

  return (
    <header>
      <p data-testid="email-field">
        { userEmail.user.email }
      </p>
      <p data-testid="total-field">
        {totalOfExpenses}
      </p>
      <p data-testid="header-currency-field">
        BRL
      </p>
    </header>
  );
}

export default Header;
