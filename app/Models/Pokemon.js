export default class Pokemon {
    constructor(data) {
        this.name = data.name
        this.height = data.height
        this.weight = data.weight
        this.id = data.id
        // this.type = type[0].type.name
        this.image = data.sprites.other.dream_world.front_default
    }

    get Template() {

        return /*html*/`
            <span><img src="${this.image}" width= 200> | ${this.name} | ${this.height} | ${this.weight} | ${this.id}</span>
        `
    }
}
