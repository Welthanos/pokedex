import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPokemons } from '../../store/slices/pokemonSlice';
import { addFavorite, removeFavorite } from '../../store/slices/favoriteSlice';
import { Pokemon } from '../../interfaces/interfaces';

import pokeballEmpty from "../../assets/pokeball-empty.svg";
import pokeball from "../../assets/pokeball.svg";
import Card from '../card/Card';
import './CardGroup.css';

export default function CardGroup() {
    const pokemons = useAppSelector(state => state.pokemon.pokemons);
    const favorites = useAppSelector(state => state.favorite.favorites);
    const dispatch = useAppDispatch();

    const handleFavorite = (pokemon: Pokemon) => {
        const favorite = favorites.find(f => f.pokemon.id === pokemon.id);
        if (favorite?.isFavorite) dispatch(removeFavorite({ pokemon, isFavorite: false }));
        else dispatch(addFavorite({ pokemon, isFavorite: true }));
    }

    const handleFavoriteImage = (pokemon: Pokemon) => {
        return favorites.find(f => f.pokemon.id === pokemon.id && f.isFavorite) ? pokeball : pokeballEmpty;
    }

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
                        favoriteUrl={handleFavoriteImage(pokemon)}
                        types={pokemon.types.map(t => t.type.name)}
                        handleFavorite={() => handleFavorite(pokemon)}
                    />
                );
            })}
        </section>
    );
}