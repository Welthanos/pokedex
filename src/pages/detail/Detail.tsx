import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPokemons } from '../../store/slices/pokemonSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './Detail.css';

export default function Detail() {
    const { id } = useParams();
    const pokemons = useAppSelector(state => state.pokemon.pokemons);
    const pokemon = pokemons.filter(pokemon => String(pokemon.id) === id)[0];
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPokemons());
    }, []);

    return (
        <main className='detail'>
            {pokemon && (
                <div className='detail-container'>
                    <picture>
                        <img src={pokemon.sprites.front_default} alt={`Imagem do Pokémon ${pokemon.name}`} />
                    </picture>
                    <div className='info'>
                        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>

                        <h3>Height</h3>
                        <p>{parseInt(pokemon.height) / 10} m</p>

                        <h3>Weight</h3>
                        <p>{parseInt(pokemon.weight) / 10} kg</p>

                        <h3>Types</h3>
                        {pokemon.types.map(type => (
                            <p className='type' key={type.type.name}>{type.type.name[0].toUpperCase() + type.type.name.slice(1)}</p>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}    