import Card from "../../components/card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addFavorite, removeFavorite } from "../../store/slices/favoriteSlice";
import './Favorites.css';

import pokeballEmpty from "../../assets/pokeball-empty.svg";
import pokeball from "../../assets/pokeball.svg";
import { Pokemon } from "../../store/slices/pokemonSlice";

export default function Favorites() {
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

    return (
        <main className="favorites">
            <section className="cards">
                {favorites.length !== 0 ?
                    favorites.map(favorite => {
                        return (
                            <Card key={favorite.pokemon.id}
                                id={favorite.pokemon.id}
                                name={favorite.pokemon.name}
                                url={favorite.pokemon.sprites.front_default}
                                favoriteUrl={handleFavoriteImage(favorite.pokemon)}
                                types={favorite.pokemon.types.map(t => t.type.name)}
                                handleFavorite={() => handleFavorite(favorite.pokemon)}
                            />
                        );
                    })
                    : <h2>There are no Pokémons added to favorites.</h2>}
            </section>
        </main>
    );
}