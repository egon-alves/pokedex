import React from "react";
import './pokemon.css'
export const Pokemon = (props) => {
    const { pokemon } = props

    return (
        <div>
            {/* <p>{pokemon.id}</p> */}
            <div className="cards">

                <div > 
                    
                    <div className="cards-name" href={pokemon.url}>
                        <img className="pokebola" src={pokemon.sprites.front_default} alt='pokebola' ></img><a>{pokemon.name}
                        </a></div>
                        
                </div>

                <p>{pokemon.id}</p>
            </div>
            
        </div>
    )
}


{/* <img className="cards-img" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}></img> */}