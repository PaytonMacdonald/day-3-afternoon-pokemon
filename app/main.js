import MyController from "./Controllers/MyController.js";
import PokemonController from "./Controllers/PokemonController.js";

class App {
  myController = new MyController();
  pokemonController = new PokemonController();
}

window["app"] = new App();
