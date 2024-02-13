import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPokemons } from '../../store/slices/pokemonSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './Detail.css';

export default function Detail() {
    const { id } = useParams();
    const pokemons = useAppSelector(state => state.pokemon.pokemons);
    const pokemon = pokemons.filter(pokemon => String(pokemon.id) === id)[0]
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPokemons());
    }, []);

    return (
        <main className='detail'>
            <h1>Pokémon Details</h1>
            {pokemon && (
                <div className='detail-container'>
                    <picture>
                        <img src={pokemon.sprites.front_default} alt={`Imagem do Pokémon ${pokemon.name}`} />
                    </picture>

                    <div className='infos'>
                        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>

                        <div className='info-text'>
                            <div className="text">
                                <h3>Height</h3>
                                <p>{parseInt(pokemon.height) / 10} m</p>
                            </div>
                            <div className="text">
                                <h3>Weight</h3>
                                <p>{parseInt(pokemon.weight) / 10} kg</p>
                            </div>
                        </div>

                        <div className='info-text'>
                            <div className="text">
                                <h3>Types</h3>
                                {pokemon.types.map(t => (
                                    <p className='type' key={t.type.name}>{t.type.name[0].toUpperCase() + t.type.name.slice(1)}</p>
                                ))}
                            </div>

                            <div className="text">
                                <h3>Abilities</h3>
                                {pokemon.abilities.map(a => (
                                    <p className='ability' key={a.ability.name}>{a.ability.name[0].toUpperCase() + a.ability.name.slice(1)}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='bottom'></div>
        </main >
    );
}    