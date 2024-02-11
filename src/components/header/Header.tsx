import './Header.css';
import pokedex from '../../assets/pokedex.svg';
import pokeball from '../../assets/pokeball.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link className='logo' to='/'><img src={pokedex} alt="Logo da PokéDex" /></Link>
            <Link className='favorites' to='/favorites'> <img src={pokeball} alt="Figura de uma Pokébola" />Favorites</Link>
        </header >
    );
}