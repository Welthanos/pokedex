import Card from "../../components/card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { removeFavorite } from "../../store/slices/favoriteSlice";
import './Favorites.css';

import pokeballEmpty from "../../assets/pokeball-empty.svg";
import pokeball from "../../assets/pokeball.svg";

export default function Favorites() {
    const favorites = useAppSelector(state => state.favorite.favorites);
    const favoritess = useAppSelector(state => state.favorite.favorites);
    const dispatch = useAppDispatch();

    return (
        <main className="favorites">
            <section className="cards">
                {favorites.length === 0 ?
                    <h2>There are no Pokémons added to favorites.</h2>
                    :
                    favorites.map(favorite => {
                        return (
                            <Card key={favorite.pokemon.id}
                                id={favorite.pokemon.id}
                                name={favorite.pokemon.name}
                                url={favorite.pokemon.sprites.front_default}
                                favoriteUrl={favoritess.find(f => f.pokemon.id === favorite.pokemon.id) ? pokeball : pokeballEmpty}
                                types={favorite.pokemon.types.map(type => type.type.name)}
                                handleFavorite={() => dispatch(removeFavorite(favorite))}
                            />
                        );
                    })}
            </section>
        </main>
    );
}