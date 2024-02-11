import './Card.css';

import pokeball from "../../assets/pokeball-empty.svg";

interface CardProps {
    name: string;
    url: string;
    type: string;
}

export default function Card({ name, url, type }: CardProps) {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);

    return (
        <div className='card-container'>
            <img className='pokemon' src={url} alt={`Imagem do pokémon ${name}`} />
            <div className='info'>
                <div>
                    <h3>{capitalizedName}</h3>
                    <img className='pokeball' src={pokeball} alt="Adicionar aos favoritos" role='button' />
                </div>
                <p>{capitalizedType}</p>
            </div>
        </div>
    );
}