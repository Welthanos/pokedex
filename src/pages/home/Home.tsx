import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchPokemons } from "../../store/slices/pokemonSlice";

export default function Home() {
    const pokemons = useAppSelector(state => state.pokemon.pokemons);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchPokemons());
    }, []);

    return (
        <>
            {pokemons && pokemons.map(pokemon => {
                return (
                    <div key={pokemon.id}>
                        {pokemon.name}
                    </div>
                );
            })}
        </>
    );
}
