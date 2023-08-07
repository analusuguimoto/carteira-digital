// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from "redux"
import { currencyInfo, walletExpensesInfo } from "../actions";

const initialState = {
  currencies: [],
  expenses: [], 
}

const wallet = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case currencyInfo: {
      return {
        ...state,
        currencies: action.payload.currencies,
      }
    }

    case walletExpensesInfo: {
      return {
        ...state,
        expenses: [...state.expenses, action.payload.expenses],
      }
    }
    default:
      return state;
  }
}

export default wallet;