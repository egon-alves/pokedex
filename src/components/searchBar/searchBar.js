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
     <h3>Peso: {pokemon.weight}</h3>
     <h3>lista de movimentos : {pokemon.weight}</h3>
     <h3>lista de habilidades com a descricao da abilidade: {pokemon.weight}</h3>
     <h3>tipo do pokemon: {pokemon.types[0].type.url}</h3>



     <h3>tipo do id: {pokemon.id}</h3>
     <h3> {pokemon.stats[0].stat.name}:{pokemon.stats[0].base_stat} </h3>
     <h3> {pokemon.stats[1].stat.name}:{pokemon.stats[1].base_stat} </h3>
     <h3> {pokemon.stats[2].stat.name}:{pokemon.stats[2].base_stat} </h3>
     <h3> {pokemon.stats[3].stat.name}:{pokemon.stats[3].base_stat} </h3>
     <h3> {pokemon.stats[4].stat.name}:{pokemon.stats[4].base_stat} </h3>



     <h3>Experiencia: {pokemon.base_experience}</h3>
     <h3>tipo do pokemon: {pokemon.abilities[0].ability.name}</h3>


     <h3>tipo do pokemon: {pokemon.types[0].type.url}</h3>



     </div>
 } 
  handleClose={togglePopup} 
 />
 </div>
) : null}
          
           
             

            
        </div>

    )
}
