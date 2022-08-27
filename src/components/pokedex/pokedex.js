import React from "react";
import './pokedex.css'
import '../../App.css'
export const Pokedex = (props) => {
    const { pokemons, loading } = props
    console.log('Pokedex aqui ', pokemons );
    
    return (
        <div>
            
        
            {loading  || !pokemons ? (
                <div>Arguarde...</div>
            ) : (
                <div className="pokedex-grind" >
                    {pokemons && pokemons.map(
                        (pokemon, index) => {
                            return (
                                <div className="pokedex-list" hrf='#'>
                                    
                                    <img src="https://picsum.photos/120/120" alt={pokemon.name}></img>
                                    
                                    
                                    <h1> {pokemon.name}</h1>
                                   
                                
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