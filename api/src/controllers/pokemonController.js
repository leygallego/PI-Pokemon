const { Pokemons, Types, Op } = require('../db');
const axios = require('axios');
const { v4: uuidv4 } = require("uuid");
var Sequelize = require("sequelize");
 

async function getPokemons(req, res, next) {

    try {

        //Obteniendo  Pokemones
        var pokemonBase = [];
        for (let i = 1; i <= 40; i++) {
            pokemonBase.push(await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`))
        }
        // console.log(pokemonBase);

        // let resultado = [
        //     {
        //         "id": 1,
        //         "name": "bulbasaur",
        //         "hp": 45,
        //         "strenght": 65,
        //         "defense": 49,
        //         "speed": 45,
        //         "height": 7,
        //         "weight": 69,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        //         "types": "grass"
        //     },
        //     {
        //         "id": 2,
        //         "name": "ivysaur",
        //         "hp": 60,
        //         "strenght": 80,
        //         "defense": 63,
        //         "speed": 60,
        //         "height": 10,
        //         "weight": 130,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        //         "types": "grass"
        //     },
        //     {
        //         "id": 3,
        //         "name": "venusaur",
        //         "hp": 80,
        //         "strenght": 100,
        //         "defense": 83,
        //         "speed": 80,
        //         "height": 20,
        //         "weight": 1000,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        //         "types": "grass"
        //     },
        //     {
        //         "id": 4,
        //         "name": "charmander",
        //         "hp": 39,
        //         "strenght": 60,
        //         "defense": 43,
        //         "speed": 65,
        //         "height": 6,
        //         "weight": 85,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        //         "types": "fire"
        //     },
        //     {
        //         "id": 5,
        //         "name": "charmeleon",
        //         "hp": 58,
        //         "strenght": 80,
        //         "defense": 58,
        //         "speed": 80,
        //         "height": 11,
        //         "weight": 190,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        //         "types": "fire"
        //     },
        //     {
        //         "id": 6,
        //         "name": "charizard",
        //         "hp": 78,
        //         "strenght": 109,
        //         "defense": 78,
        //         "speed": 100,
        //         "height": 17,
        //         "weight": 905,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        //         "types": "fire"
        //     },
        //     {
        //         "id": 7,
        //         "name": "squirtle",
        //         "hp": 44,
        //         "strenght": 50,
        //         "defense": 65,
        //         "speed": 43,
        //         "height": 5,
        //         "weight": 90,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        //         "types": "water"
        //     },
        //     {
        //         "id": 8,
        //         "name": "wartortle",
        //         "hp": 59,
        //         "strenght": 65,
        //         "defense": 80,
        //         "speed": 58,
        //         "height": 10,
        //         "weight": 225,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
        //         "types": "water"
        //     },
        //     {
        //         "id": 9,
        //         "name": "blastoise",
        //         "hp": 79,
        //         "strenght": 85,
        //         "defense": 100,
        //         "speed": 78,
        //         "height": 16,
        //         "weight": 855,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        //         "types": "water"
        //     },
        //     {
        //         "id": 10,
        //         "name": "caterpie",
        //         "hp": 45,
        //         "strenght": 20,
        //         "defense": 35,
        //         "speed": 45,
        //         "height": 3,
        //         "weight": 29,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
        //         "types": "bug"
        //     },
        //     {
        //         "id": 11,
        //         "name": "metapod",
        //         "hp": 50,
        //         "strenght": 25,
        //         "defense": 55,
        //         "speed": 30,
        //         "height": 7,
        //         "weight": 99,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
        //         "types": "bug"
        //     },
        //     {
        //         "id": 12,
        //         "name": "butterfree",
        //         "hp": 60,
        //         "strenght": 90,
        //         "defense": 50,
        //         "speed": 70,
        //         "height": 11,
        //         "weight": 320,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
        //         "types": "bug"
        //     },
        //     {
        //         "id": 13,
        //         "name": "weedle",
        //         "hp": 40,
        //         "strenght": 20,
        //         "defense": 30,
        //         "speed": 50,
        //         "height": 3,
        //         "weight": 32,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
        //         "types": "bug"
        //     },
        //     {
        //         "id": 14,
        //         "name": "kakuna",
        //         "hp": 45,
        //         "strenght": 25,
        //         "defense": 50,
        //         "speed": 35,
        //         "height": 6,
        //         "weight": 100,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
        //         "types": "bug"
        //     },
        //     {
        //         "id": 15,
        //         "name": "beedrill",
        //         "hp": 65,
        //         "strenght": 45,
        //         "defense": 40,
        //         "speed": 75,
        //         "height": 10,
        //         "weight": 295,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
        //         "types": "bug"
        //     },
        //     {
        //         "id": 16,
        //         "name": "pidgey",
        //         "hp": 40,
        //         "strenght": 35,
        //         "defense": 40,
        //         "speed": 56,
        //         "height": 3,
        //         "weight": 18,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
        //         "types": "normal"
        //     },
        //     {
        //         "id": 17,
        //         "name": "pidgeotto",
        //         "hp": 63,
        //         "strenght": 50,
        //         "defense": 55,
        //         "speed": 71,
        //         "height": 11,
        //         "weight": 300,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        //         "types": "normal"
        //     },
        //     {
        //         "id": 18,
        //         "name": "pidgeot",
        //         "hp": 83,
        //         "strenght": 70,
        //         "defense": 75,
        //         "speed": 101,
        //         "height": 15,
        //         "weight": 395,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
        //         "types": "normal"
        //     },
        //     {
        //         "id": 19,
        //         "name": "rattata",
        //         "hp": 30,
        //         "strenght": 25,
        //         "defense": 35,
        //         "speed": 72,
        //         "height": 3,
        //         "weight": 35,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
        //         "types": "normal"
        //     },
        //     {
        //         "id": 20,
        //         "name": "raticate",
        //         "hp": 55,
        //         "strenght": 50,
        //         "defense": 60,
        //         "speed": 97,
        //         "height": 7,
        //         "weight": 185,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
        //         "types": "normal"
        //     },
        //     {
        //         "id": 21,
        //         "name": "spearow",
        //         "hp": 40,
        //         "strenght": 31,
        //         "defense": 30,
        //         "speed": 70,
        //         "height": 3,
        //         "weight": 20,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
        //         "types": "normal"
        //     },
        //     {
        //         "id": 22,
        //         "name": "fearow",
        //         "hp": 65,
        //         "strenght": 61,
        //         "defense": 65,
        //         "speed": 100,
        //         "height": 12,
        //         "weight": 380,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
        //         "types": "normal"
        //     },
        //     {
        //         "id": 23,
        //         "name": "ekans",
        //         "hp": 35,
        //         "strenght": 40,
        //         "defense": 44,
        //         "speed": 55,
        //         "height": 20,
        //         "weight": 69,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
        //         "types": "poison"
        //     },
        //     {
        //         "id": 24,
        //         "name": "arbok",
        //         "hp": 60,
        //         "strenght": 65,
        //         "defense": 69,
        //         "speed": 80,
        //         "height": 35,
        //         "weight": 650,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
        //         "types": "poison"
        //     },
        //     {
        //         "id": 25,
        //         "name": "pikachu",
        //         "hp": 35,
        //         "strenght": 50,
        //         "defense": 40,
        //         "speed": 90,
        //         "height": 4,
        //         "weight": 60,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        //         "types": "electric"
        //     },
        //     {
        //         "id": 26,
        //         "name": "raichu",
        //         "hp": 60,
        //         "strenght": 90,
        //         "defense": 55,
        //         "speed": 110,
        //         "height": 8,
        //         "weight": 300,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
        //         "types": "electric"
        //     },
        //     {
        //         "id": 27,
        //         "name": "sandshrew",
        //         "hp": 50,
        //         "strenght": 20,
        //         "defense": 85,
        //         "speed": 40,
        //         "height": 6,
        //         "weight": 120,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
        //         "types": "ground"
        //     },
        //     {
        //         "id": 28,
        //         "name": "sandslash",
        //         "hp": 75,
        //         "strenght": 45,
        //         "defense": 110,
        //         "speed": 65,
        //         "height": 10,
        //         "weight": 295,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
        //         "types": "ground"
        //     },
        //     {
        //         "id": 29,
        //         "name": "nidoran-f",
        //         "hp": 55,
        //         "strenght": 40,
        //         "defense": 52,
        //         "speed": 41,
        //         "height": 4,
        //         "weight": 70,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
        //         "types": "poison"
        //     },
        //     {
        //         "id": 30,
        //         "name": "nidorina",
        //         "hp": 70,
        //         "strenght": 55,
        //         "defense": 67,
        //         "speed": 56,
        //         "height": 8,
        //         "weight": 200,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
        //         "types": "poison"
        //     },
        //     {
        //         "id": 31,
        //         "name": "nidoqueen",
        //         "hp": 90,
        //         "strenght": 75,
        //         "defense": 87,
        //         "speed": 76,
        //         "height": 13,
        //         "weight": 600,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
        //         "types": "poison"
        //     },
        //     {
        //         "id": 32,
        //         "name": "nidoran-m",
        //         "hp": 46,
        //         "strenght": 40,
        //         "defense": 40,
        //         "speed": 50,
        //         "height": 5,
        //         "weight": 90,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
        //         "types": "poison"
        //     },
        //     {
        //         "id": 33,
        //         "name": "nidorino",
        //         "hp": 61,
        //         "strenght": 55,
        //         "defense": 57,
        //         "speed": 65,
        //         "height": 9,
        //         "weight": 195,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
        //         "types": "poison"
        //     },
        //     {
        //         "id": 34,
        //         "name": "nidoking",
        //         "hp": 81,
        //         "strenght": 85,
        //         "defense": 77,
        //         "speed": 85,
        //         "height": 14,
        //         "weight": 620,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
        //         "types": "poison"
        //     },
        //     {
        //         "id": 35,
        //         "name": "clefairy",
        //         "hp": 70,
        //         "strenght": 60,
        //         "defense": 48,
        //         "speed": 35,
        //         "height": 6,
        //         "weight": 75,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
        //         "types": "fairy"
        //     },
        //     {
        //         "id": 36,
        //         "name": "clefable",
        //         "hp": 95,
        //         "strenght": 95,
        //         "defense": 73,
        //         "speed": 60,
        //         "height": 13,
        //         "weight": 400,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
        //         "types": "fairy"
        //     },
        //     {
        //         "id": 37,
        //         "name": "vulpix",
        //         "hp": 38,
        //         "strenght": 50,
        //         "defense": 40,
        //         "speed": 65,
        //         "height": 6,
        //         "weight": 99,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
        //         "types": "fire"
        //     },
        //     {
        //         "id": 38,
        //         "name": "ninetales",
        //         "hp": 73,
        //         "strenght": 81,
        //         "defense": 75,
        //         "speed": 100,
        //         "height": 11,
        //         "weight": 199,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
        //         "types": "fire"
        //     },
        //     {
        //         "id": 39,
        //         "name": "jigglypuff",
        //         "hp": 115,
        //         "strenght": 45,
        //         "defense": 20,
        //         "speed": 20,
        //         "height": 5,
        //         "weight": 55,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
        //         "types": "normal"
        //     },
        //     {
        //         "id": 40,
        //         "name": "wigglytuff",
        //         "hp": 140,
        //         "strenght": 85,
        //         "defense": 45,
        //         "speed": 45,
        //         "height": 10,
        //         "weight": 120,
        //         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
        //         "types": "normal"
        //     }
        // ];

        let resultado = pokemonBase.map((e) => {
            return {
                id: e.data.id,
                name: e.data.name,
                hp: e.data.stats[0].base_stat,
                strenght: e.data.stats[3].base_stat,
                defense: e.data.stats[2].base_stat,
                speed: e.data.stats[5].base_stat,
                height: e.data.height,
                weight: e.data.weight,
                image: e.data.sprites.other["official-artwork"].front_default,
                types: e.data.types[0].type.name,
            }
        })
        Pokemons.findAll({ include: { model: Types } })
            .then(dbPokemon => {
                dbPokemon = dbPokemon.concat(resultado);

                res.send(dbPokemon);

            })


    } catch (error) {
        next(error)
    }

}

// Búsqueda de pokemones por ID (Obtener un solo pokemón)
async function getOnePokemon(req, res, next) {

    try {
        const { id } = req.params;
        let pkInfo;
        if (isNaN(id)) {
            pkInfo = await Pokemons.findOne({
                where: {
                    id: id
                },
                include: {
                    model: Types
                }
            })
            res.send(pkInfo)
        } else {
            pkInfo = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
            // console.log(resultado);
            pkInfo = {
                name: pkInfo.name,
                image: pkInfo.sprites.other["official-artwork"].front_default,
                height: pkInfo.height,
                weight: pkInfo.weight,
                hp: pkInfo.stats[0].base_stat,
                strenght: pkInfo.stats[3].base_stat,
                speed: pkInfo.stats[5].base_stat,
                defense: pkInfo.stats[2].base_stat,
                types: pkInfo.types[0].type.name,
            }
            res.send(pkInfo)
        }
    } catch (error) {
        next(error)
    }
}


//agregar pokemones 
async function addPokemon(req, res, next) {
    try {
        const { name, hp, strenght, defense, speed, height, weight, image, types } = req.body;

        const newPokemon = await Pokemons.create({ name, hp, strenght, defense, speed, height, weight, image });

        // if (types.length === 0) {
        //     types = ['Neutro']
        // }

        types.forEach(element => {
            newPokemon.addTypes(element);
        })
        // await newPokemon.addTypes(types); // para mas de un tipo "Promise.All"
        res.send(newPokemon)
    } catch (error) {
        next(error)
    }
}


async function searchPokemon(req, res, next) {

    try {
        const { name } = req.query;
        let result = [];
        let dbPk = await Pokemons.findAll({
            where: {
                [Sequelize.Op.or]: [
                    {
                        name: {
                            [Sequelize.Op.iLike]: `%${name}%`,
                        }
                    }
                ]
            }
        })
        // console.log("1 consulta", dbPk);
        if (dbPk) result = result.concat(dbPk)
        // console.log("2 consulta", result);
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => {
                result = result.concat(res.data)
                // console.log("concatenado",result);
                return res.json(result)
            }).catch(() => {
                return res.json(result)
            })

    } catch (error) {
        next(error)
    }

}

// async function searchPokemon(req, res, next) {

//     try {
//         const { name } = req.query;
//         let pokInfoDB;
//         let pokInfo;
//         if (name) {
//             pokInfoDB = await Pokemons.findAll({
//                 where: {
//                     [Sequelize.Op.or]: [
//                         {
//                             name: {
//                                 [Sequelize.Op.iLike]: `%${name}%`,
//                             }
//                         }
//                     ]
//                 }
//             })
//             res.send(pokInfoDB)
//         } else {
//              pokInfo =   (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data
            
//               pokInfo = {
//                   name: pokInfo.name,
//                   image: pokInfo.sprites.other["official-artwork"].front_default,
//                   height: pokInfo.height,
//                   weight: pokInfo.weight,
//                   hp: pokInfo.stats[0].base_stat,
//                   strenght: pokInfo.stats[3].base_stat,
//                   speed: pokInfo.stats[5].base_stat,
//                   defense: pokInfo.stats[2].base_stat,
//                   types: pokInfo.types[0].type.name,
//               }
//               res.send(pokInfo)
//         }
         

//     } catch (error) {
//         next(error)
//     }




// }



module.exports = {
    getPokemons,
    getOnePokemon,
    addPokemon,
    searchPokemon
}


