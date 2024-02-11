import './Footer.css';
import pokedex from '../../assets/pokedex.svg';

export default function Footer() {
    return (
        <footer>
            <img src={pokedex} alt="Logo da Pokédex" />
            <span>© 2024 Copyright - Welthanos</span>
        </footer>
    );
}