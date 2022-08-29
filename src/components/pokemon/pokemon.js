import React from "react";
import './pokemon.css'
import '../../globals.js'
import Popup from "../popup/popup"
const Alerta = ()=> {
    alert('Cheguei auqi')
}


export const Pokemon = (props) => {
    const { pokemon } = props

    return (
        <div onClick={Popup}>
     
            <div className="cards">
                <div > 

                    <div className="cards-name" >
                        <img className="pokebola" src={pokemon.sprites.front_default} alt='pokebola' ></img> <a href="#"> {pokemon.name}
                        </a></div>

                </div>

                <p>{pokemon.id}</p>
            </div>

        </div>
    )
}


{/* <img className="cards-img" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}></img> */ }