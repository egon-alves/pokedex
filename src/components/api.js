export const SearchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('erro', error )
        
    }
}
export const getPokemons = async (limit = 6, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('erro', error )
        
    }
}

export const getPokemonData = async (url) => {
    try {
        
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('erro', error )
        
    }
}