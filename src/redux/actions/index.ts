// Coloque aqui suas actions

export const userData = 'set_user_data';

export const userAction = (email: string, password:string) => ({
  type: userData,
  payload: {
    email,
    password,
  },
});
