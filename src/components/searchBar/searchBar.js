import React, { useState } from "react";
import { SearchPokemon } from '../api'
import Popup from "../popup/popup";
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

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
     setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className="nav-search">
                <div>
                    <input className="campo-search" placeholder="Buscar Pokemon" onChange={onChangeHandler}></input>
                </div>
                <div className="button-search">
                    <button onClick={() => {

                        OnButtonClickHandler();

                        togglePopup()

                    }} > Buscar</button>
                </div>
            </div>
            {pokemon ? (
                <div>

                   {isOpen && <Popup content={
                        < div className="card-pokemon-stats">
                           
                            <div className="pokemon-name-stats">
                                <img className="pokemon-name-stats-img " src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}></img>
                                <h4>Nome: {pokemon.name}</h4>
                                <h4>Peso: {pokemon.weight}</h4>

                            </div>
                            <div className="pokemon-stats-list" >

                                <h4>lista de movimentos : {pokemon.weight}</h4>
                                <h4>lista de movimentos : {pokemon.weight}</h4>
                                <h4>lista de habilidades com a descricao da abilidade: {pokemon.weight}</h4>
                                <h4>tipo do pokemon: {pokemon.types[0].type.url}</h4>


                                <h4>tipo do id: {pokemon.id}</h4>
                                <h4> {pokemon.stats[0].stat.name}:{pokemon.stats[0].base_stat} </h4>
                                <h4> {pokemon.stats[1].stat.name}:{pokemon.stats[1].base_stat} </h4>

                            </div>
                            


                        </div>
                    }
                        handleClose={togglePopup}
                    />}
                </div>
            ) : null}





        </div>

    )
}
