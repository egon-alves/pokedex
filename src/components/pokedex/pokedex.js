import React from "react";
import "./pokedex.css"
import { Pokemon } from "../pokemon/pokemon";
export const Pokedex = (props) => {
    const { pokemons, loading } = props
    
    
    return (
        <div>
            
        
            {loading  || !pokemons ? (
                <div>Arguarde...</div>
            ) : (
                <div className="card" >
                    {pokemons && pokemons.map(
                        (pokemon, index) => {
                            return (

                                <Pokemon pokemon={pokemon} key={index} />
                               
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