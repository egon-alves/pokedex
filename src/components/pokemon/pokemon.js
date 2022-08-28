import React from "react";
import './pokemon.css'
export const Pokemon = (props) => {
    const { pokemon } = props
    const pokebola = 'https://img3.gratispng.com/dy/265583e8e226717453623fe2393193fc/L0KzQYi4UsE5N2JnTJGAYUO7RIG3gvI1PWg4SJC8NUK5Q4S3WcE2OWQ7S6cDNUG6Q4mATwBvbz==/5a38400bb45730.3526330915136358517387.png'

    return (
        <div onClick={pokemon.url}>  a
            {/* <p>{pokemon.id}</p> */}
            <div className="cards">

                <div > 
                    <img className="cards-img" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}></img>
                    <div className="cards-name" href={pokemon.url}>
                        <img className="pokebola" src={pokebola} ></img><a>{pokemon.name}
                        </a></div>
                        
                </div>

                <p>{pokemon.id}</p>
            </div>
            
        </div>
    )
}