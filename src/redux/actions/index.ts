// Coloque aqui suas actions

export const userData = 'set_user_data';
export const currencyInfo = 'getting_currency_info';
export const walletExpensesInfo = 'wallet_expenses_info';
export const currenciess = 'currencies';

export const userAction = (email: string, password:string) => ({
  type: userData,
  payload: {
    email,
    password,
  },
});

export const walletCurrencies = (currencies: any) => ({
  type: currencyInfo,
  payload: {
    currencies,
  },
});

export const walletExpenses = (expenses: any) => ({
  type: walletExpensesInfo,
  payload: {
    expenses,
  },
});

export const getCurrencies = () => {
  return async (dispatch: any) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();

    const filtered = Object.keys(data)
      .filter((key) => { return key !== 'USDT'; });

    dispatch(walletCurrencies(filtered));
  };
};

export const getAllCurrencyInfo = (formFilled: any) => {
  return async (dispatch:any) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const fullExpenses = { ...formFilled, exchangeRates: data };
    console.log(data);
    dispatch(walletExpenses(fullExpenses));
  };
};
