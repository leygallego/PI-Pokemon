const { Pokemon } = require('../db');
const axios = require('axios');
const { v4: uuidv4 } = require("uuid");


async function getPokemons(req, res, next) {

    try {
        //VERSIÓN PRUEBA 1
        // let pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon")
        // pokemons = pokemons.data.results.map(e => {
        //     return {
        //         name: e.name
        //     }
        // })
        // res.send(pokemons)

        //VERSIÓN PRUEBA 2 obteniendo los Pokemones
        var pokemonBase = [];
        for (let i = 1; i <= 40; i++) {
            pokemonBase.push(await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }
        // console.log(pokemonBase);

        let resultado = pokemonBase.map((e) => {
            return {
                id: e.data.id,
                name: e.data.name,
                type: e.data.types[0].type.name,
                height: e.data.height,
                image: e.data.sprites.other["official-artwork"].front_default
                
            }
        })
        res.send(resultado);

        //TODO: Implementar la búsqueda en la base de datos
    } catch (error) {
        next(error)
    }

}

// Búsqueda de pokemones por ID (Obtener un solo pokemón)

    async function getOnePokemon(req, res, next) {

        try {
            const { id } = req.params
            let pkApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

             pkApi = pkApi.data
            let mostrarPk = {
                name: pkApi.name,
                image: pkApi.sprites.other["official-artwork"].front_default,
                height: pkApi.height,
                weight: pkApi.weight,
                hp: pkApi.stats[0].base_stat,
                strenght: pkApi.stats[1].base_stat,
                speed: pkApi.stats[5].base_stat,
                defense: pkApi.stats[2].base_stat,

                        }
            res.send(mostrarPk)
        } catch (error) {
            
        }
        
    }

    async function addPokemon(req, res, next){
        try {
            const {name, hp, strenght, defense, speed, height, weight, image} = req.body;

            const newPokemon = Pokemon.create({name, hp, strenght, defense, speed, height, weight, image })
            //await newPokemon.addPokemon(type)

            res.send(newPokemon)
        } catch (error) {
            next(error)
        }
    }



module.exports = {
    getPokemons,
    getOnePokemon,
    addPokemon
}


// Promise.All(pokemonBase)
        // .then((pokemon) => {
        //     let pokemonData = pokemon.map((e) => {
        //         return {
        //             name: e.data.name,
        //             image: e.data.sprites.other.official_artwork.front_default

        //         }
        //     })
        //     res.send(pokemonData)
        // }).catch((error) => {
        //     console.log(error);
        // })