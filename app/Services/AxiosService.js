export const myApi = axios.create({
    // SANDBOXLINK/ api / payton / pokemon
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/payton/pokemon',
    timeout: 3000
})
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=5&offset=0',
    timeout: 3000
})