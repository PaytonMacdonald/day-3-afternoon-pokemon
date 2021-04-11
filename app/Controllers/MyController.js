import { ProxyState } from "../AppState.js";
// import { myService } from "../Services/MyService.js";


//Private
function _draw() {
    let template = ""
    ProxyState.myPokemon.forEach(s => {
        template += `<li class="action hover-action" onclick="app.pokemonController.setActive('${s.id}')">${s.name}</li>`
    })
    document.getElementById('my-spells').innerHTML = template
}

//Public
export default class MyController {

}
