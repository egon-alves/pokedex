import React from "react"


export const PokemonCard = (props) => {
    const pokemons = props
    return (
        < div className="card-pokemon-stats">

            <h4>lista de movimentos : {pokemons.name}</h4>
        </div>
    )
}