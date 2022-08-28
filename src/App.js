import React, { useEffect, useState, Fragment } from 'react';
import { getPokemonData, getPokemons } from './components/api';
import { Navbar } from './components/navbar/navbar';
import { Pokedex } from './components/pokedex/pokedex';
import { SearchBar } from './components/searchBar/searchBar';
// aplication theme dark light
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './components/theme/theme';
import GlobalTheme from "./globals";
import { ButtonChange } from './components/button/button-thema/button-thema';
// CSS style
// import './css/global.css'

export default function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)

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
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
    fetchPokemons()
  }, [])
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />
        {/* <Navbar />
          <SearchBar/> */}
        <div className='container' >
        
          {/* <ButtonChange onClick={toggleTheme}
          > {theme === "light" ? "DARK" : "LIGHT "}
          </ButtonChange> */}


          <div className='card-list'>
            <Pokedex pokemons={pokemons} loading={loading} />
          </div>

        </div>
      </Fragment>
    </ThemeProvider>



  );
}


