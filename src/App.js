import React, { useEffect, useState, } from 'react';
import { getPokemonData, getPokemons } from './components/api';
import { Navbar } from './components/navbar/navbar';
import { Pokedex } from './components/pokedex/pokedex';
import { SearchBar } from './components/searchBar/searchBar';
// aplication toggler button 


// CSS style
import './css/global.css'
export default function App() {

  const [loading, setLoading] = useState(false)

  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch (error) {
      console.log('fetchPokemon Error', error)
    }
  }

  useEffect(() => {

    fetchPokemons()

  }, [])



  return (
   
      <div className='container' >

        <Navbar />
        <div className='card-list'>
          <Pokedex pokemons={pokemons} loading={loading} />
        </div>
      </div>



  );


}