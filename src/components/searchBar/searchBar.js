import React, { useState } from "react";
import { SearchPokemon } from '../api'
import "./searchBar.css"


export const SearchBar = () => {
    const [search, setSearch] = useState(' pikachu')
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const OnButtonClickHandler = () => {
        onSearcHandler(search)
    }
    const onSearcHandler = async (pokemon) => {
        const result = await SearchPokemon(pokemon)
        setPokemon(result)

    }

    return (
        <div className="searchBarContainer">
            <div className="searchBar">
                <div >
                    <input placeholder="Buscar Pokemon" onChange={onChangeHandler}></input>
                </div>
                <div className="searchBarBtn">
                    <button onClick={OnButtonClickHandler} > Buscar</button>
                </div>
            </div>

            
            <div className="CardSearch">
                {pokemon ? (
                    <div className="card">
                        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}></img>
                        <h1>Nome: {pokemon.name}</h1>
                        <h2>Peso: {pokemon.weight}</h2>

                    </div>

                ) : null}

            </div>
        </div>

    )
}
