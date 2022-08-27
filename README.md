Esse metedo eu chamo a api, mas nao pode esquecer de usar o asyn, pois o fetch é uma promessa 

export const searchPokemon = async (pokemon) => {
    try {
        // let url = `https://pokeapi.co/api/v2/pokemon${pokemon}` 
        let url = `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`
        const response = await fetch(url)
        return await response.json
    } catch(error) {
        console.log('erro', error )
    }
}