import React, { useState } from "react";
import './pokemon.css'
import '../../globals.js'
import '../popup/popup.css'
import { PopUpPokemon } from "../pokemon-stats/pokemon-stats";
import { Navbar } from "../navbar/navbar";



export const Pokemon = (props) => {
    const { pokemon } = props
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div onClick={() => { togglePopup() }}>
            <div>

                <div className="cards">
                    <div  >

                        <div className="cards-name" >
                            <img className="pokebola" src={pokemon.sprites.front_default} alt='pokebola' ></img> <a> {pokemon.name}
                            </a></div>

                    </div>

                    <p>{pokemon.id}</p>
                </div>
                {isOpen && <PopUpPokemon content={
                    <>

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
                 </>
                } handleClose={togglePopup}
                />}
        </div>
        </div >
    )
}


