import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Card from '../card/Card';
import './CardGroup.css';
import { fetchPokemons } from '../../store/slices/pokemonSlice';
import { Favorite, addFavorite } from '../../store/slices/favoriteSlice';

import pokeballEmpty from "../../assets/pokeball-empty.svg";
import pokeball from "../../assets/pokeball.svg";

export default function CardGroup() {
    const pokemons = useAppSelector(state => state.pokemon.pokemons);
    const favorites = useAppSelector(state => state.favorite.favorites);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPokemons());
    }, []);

    return (
        <section className='cards'>
            {pokemons && pokemons.map(pokemon => {
                return (
                    <Card key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        url={pokemon.sprites.front_default}
                        favoriteUrl={favorites.find(f => f.pokemon.id === pokemon.id && f.isFavorite) ? pokeball : pokeballEmpty   }
                        type={pokemon.types['0'].type.name}
                        handleFavorite={() => dispatch(addFavorite({ pokemon, isFavorite: true }))}
                    />
                );
            })}
        </section>
    );
}