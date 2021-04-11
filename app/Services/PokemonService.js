import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js"

class PokemonService {

  async getAllPokemon() {
    let res = await pokemonApi.get()
    ProxyState.indexPokemon = res.data.results
  }

  async getPokemon(index) {
    let res = await pokemonApi.get(index)
    ProxyState.activePokemon = new Pokemon(res.data)
  }
}

export const pokemonService = new PokemonService();