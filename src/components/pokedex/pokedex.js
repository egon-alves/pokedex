import React from "react";
import "./pokedex.css"
import { Pokemon } from "../pokemon/pokemon";
export const Pokedex = (props) => {
    const { pokemons, loading } = props
    
    
    return (
        <div >
            
            {loading  || !pokemons ? (
                <div>Arguarde...</div>
            ) : (
                <div className="pokemon-list">
                    {pokemons && pokemons.map(
                        (pokemon, index) => {
                            return (
                                <div >
                                <Pokemon pokemon={pokemon} key={index} /></div>
                                
                               
                            )
                        }
                    )
                    }
                </div>
            )
            }
        </div>
    )


}