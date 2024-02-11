import './Header.css';
import pokedex from '../../assets/pokedex.svg';

export default function Header() {
    return (
        <header>
            <img src={pokedex} alt="Logo da Pokédex" />
        </header>
    );
}