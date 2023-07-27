import { useSelector } from 'react-redux';

type RootState = {
  user: any;
};

function Wallet() {
  const usuario = useSelector((state: RootState) => state);
  console.log(usuario);
  console.log(usuario.email);
  return <div>TrybeWallet</div>;
}

export default Wallet;
