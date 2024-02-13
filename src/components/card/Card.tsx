import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
    id: string;
    name: string;
    url: string;
    favoriteUrl: string;
    types: string[];
    handleFavorite: () => void;
}

export default function Card({ id, name, url, favoriteUrl, types, handleFavorite }: CardProps) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div className='card-container'>
            <Link to={`./detail/${id}`}><img className='pokemon' src={url} alt={`Imagem do pokémon ${name}`} /></Link>
            <div className='info'>
                <div>
                    <h3>{capitalizedName}</h3>
                    <img
                        className='pokeball'
                        src={favoriteUrl}
                        onClick={handleFavorite}
                        alt="Adicionar aos favoritos"
                        role='button'
                        loading='lazy'
                    />
                </div>
                {types.map(type => <p key={type}>{type[0].charAt(0).toUpperCase() + type.slice(1)}</p>)}
            </div>
        </div>
    );
}