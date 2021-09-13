const { Type } = require("../db");
const axios = require('axios');

async function getTypes(req, res, next) {

    try {
    var typeBase = [];
    for (let i = 1; i <= 40; i++) {
        typeBase.push(await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }

    let dbTypes = await Promise.all(
        typeBase.map(e=> Type.findOrCreate({
            where: {
                name: e.data.types[0].type.name
            }
        }))
    )
        res.json(dbTypes)
    } catch (error) {
        next(error)
    }
    
}


// var pokemonBase = [];
// for (let i = 1; i <= 40; i++) {
//     pokemonBase.push(await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
// }
// // console.log(pokemonBase);

// let resultado = pokemonBase.map((e) => {
//     return {
//         id: e.data.id,
//         name: e.data.name,
//         image: e.data.sprites.other["official-artwork"].front_default 
//     }
// })

// res.send(resultado);

module.exports = {
    getTypes
}