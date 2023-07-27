// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';
import { userData } from '../actions';

const initialState = {
  email: '',
  password: '',
};

const user = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case userData: {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    }

    default:
      return state;
  }
};

export default user;
