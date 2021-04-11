import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";


//Private
function _draw() {
    let template = ''
    ProxyState.indexPokemon.forEach(p => {
        template += /*html*/`
        <li class="action hover-action dex-font" onclick="app.pokemonController.getPokemon('${p.url}')">${p.name}</li>
        `})
    document.getElementById('pokemon-index').innerHTML = template
}


function _drawActive() {
    document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon ? ProxyState.activePokemon.Template : "<p> no active spell</p>"
}

//Public
export default class PokemonController {
    constructor() {
        ProxyState.on("indexPokemon", _draw);
        ProxyState.on("activePokemon", _drawActive);

        this.getAllPokemon()
    }


    async getAllPokemon() {
        try {
            await pokemonService.getAllPokemon()
        } catch (error) {
            console.error(error)
        }
    }


    async getPokemon(index) {
        try {
            await pokemonService.getPokemon(index)
        } catch (error) {
            console.error(error)
        }
    }





}
