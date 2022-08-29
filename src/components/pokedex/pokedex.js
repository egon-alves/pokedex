import React from "react";
import "./pokedex.css"
// import '../../css/global.css'
import { Pokemon } from "../pokemon/pokemon";
export const Pokedex = (props) => {
    const { pokemons, loading } = props
    
    
    return (
        <div>
            
        
            {loading  || !pokemons ? (
                <div>Carregando</div>
            ) : (
                <div className="card" >
                    {pokemons && pokemons.map(
                        (pokemon, index) => {
                            return (
                                <div className="card-list">
                                <Pokemon pokemon={pokemon} key={index} />
                                </div>
                               
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