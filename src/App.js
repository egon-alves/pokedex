import React, { useEffect, useState } from 'react';
import { getPokemons } from './components/api';
import { Navbar } from './components/navbar/navbar';
import { Pokedex } from './components/pokedex/pokedex';
import { SearchBar } from './components/searchBar/searchBar';
import "./css/global.css"






export default function App() {

  const [loading, setLoading] = useState(false)

  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const result = await getPokemons();
      setPokemons(result)
      setLoading(false)
    } catch (error) {
      console.log('fetchPokemon Error', error)
    }
  }

  useEffect(() => {
    console.log('Cheguei aqui 22');
    fetchPokemons()

  }, [])

  return (
    <div className='container'>
      <Navbar />
      {/* <SearchBar/> */}
      <div className='navBar'></div>
      <div className='container-list'>
        <Pokedex pokemons={pokemons.results} loading={loading} />
      </div>
    </div>

  );
}