import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Card from '../card/Card';
import './CardGroup.css';
import { fetchPokemons } from '../../store/slices/pokemonSlice';

export default function CardGroup() {
    const pokemons = useAppSelector(state => state.pokemon.pokemons);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPokemons());
    }, []);

    return (
        <section className='cards'>
            {pokemons && pokemons.map(pokemon => {
                return (
                    <Card
                        name={pokemon.name}
                        url={pokemon.sprites.front_default}
                        type={pokemon.types['0'].type.name}
                    />
                );
            })}
        </section>
    );
}