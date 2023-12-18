import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div>
            <h1>Bienvenidx a PokeSearch</h1>
            <button className='main-button'>
                <Link to='/app'>
                    Entrar
                </Link>
            </button>
        </div>
    );
};