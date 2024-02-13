export interface Type {
    type: { name: string };
}

export interface Ability {
    ability: { name: string, url: string };
}

export interface Sprite {
    front_default: string;
    back_default: string;
}

export interface Pokemon {
    id: string;
    name: string;
    height: string;
    weight: string;
    types: Type[];
    abilities: Ability[];
    sprites: Sprite;
}

export interface PokemonState {
    pokemons: Pokemon[];
}

export interface Favorite {
    pokemon: Pokemon;
    isFavorite: boolean;
}

export interface FavoriteState {
    favorites: Favorite[];
}