const { Pokemon } = require('../db');
const axios = require('axios');

async function getPokemons(req, res, next){

    try {
            //VERSIÓN PRUEBA 1
        // let pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon")
        // pokemons = pokemons.data.results.map(e => {
        //     return {
        //         name: e.name
        //     }
        // })
        // res.send(pokemons)

        //VERSIÓN PRUEBA 2
        let pokemonBase = [];
        for (let i = 1; i <= 40; i++) {
          pokemonBase.push(await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }
        // console.log(pokemonBase);

       let resultado = pokemonBase.map((e)=>{
            return {
                            name: e.data.name,
                            image: e.data.sprites.other["official-artwork"].front_default //.other.official_artwork.front_default
        
                        }
        })

        res.send(resultado);
        
        

    } catch (error) {
        next(error)
    }

}


module.exports={
    getPokemons
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