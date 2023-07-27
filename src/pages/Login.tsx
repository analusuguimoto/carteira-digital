import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userAction } from '../redux/actions';

function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [sendButton, setSendButton] = useState(true);
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verifyLogin = () => {
    if (!userEmail || !userPassword) {
      return false;
    }

    if (!userEmail.match(emailRegex)) {
      return false;
    }

    return userPassword.length >= 6;
  };

  useEffect(() => {
    setSendButton(verifyLogin());
  }, [userEmail, userPassword]);

  const handleclick = (event: any) => {
    event.preventDefault();
    dispatch(userAction(userEmail, userPassword));
    navigate('/carteira');
  };

  return (
    <form>
      <input
        type="email"
        placeholder="Digite seu email"
        data-testid="email-input"
        onChange={ (event) => setUserEmail(event.target.value) }
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        data-testid="password-input"
        onChange={ (event) => setUserPassword(event.target.value) }
      />
      <button
        type="submit"
        disabled={ !sendButton }
        onClick={ handleclick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
