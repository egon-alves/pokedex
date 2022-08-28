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
        <div className="">
            <div className="">
                <div >
                    <input placeholder="Buscar Pokemon" onChange={onChangeHandler}></input>
                </div>
                <div className="">
                    <button onClick={() => {

                        OnButtonClickHandler();

                        togglePopup()

                    }} > Buscar</button>
                </div>
            </div>
            {pokemon ? (
  <div className="CardSearch">
     
 <Popup content={
     < div className="card">
     <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}></img>
     <h1>Nome: {pokemon.name}</h1>
     <h2>Peso: {pokemon.weight}</h2>
     <h2>lista de movimentos : {pokemon.weight}</h2>
     <h2>lista de habilidades com a descricao da abilidade: {pokemon.weight}</h2>
     <h2>tipo do pokemon: {pokemon.types[0].type.url}</h2>
     </div>
 } 
  handleClose={togglePopup} 
 />
 </div>
) : null}
          
           
             

            
        </div>

    )
}
