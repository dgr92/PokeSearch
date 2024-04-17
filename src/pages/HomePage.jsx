import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <h1>Bienvenidx a PokeSearch</h1>
        <Link className="main-button" to="/app">
          <p>Entrar</p>
        </Link>
      </div>
      <Footer />
    </>
  );
};
