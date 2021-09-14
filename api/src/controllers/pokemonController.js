const { Pokemon, Type, Op } = require('../db');
const axios = require('axios');
const { v4: uuidv4 } = require("uuid");
var Sequelize = require("sequelize");


async function getPokemons(req, res, next) {

    try {
    
        //Obteniendo los Pokemones
        var pokemonBase = [];
        for (let i = 1; i <= 40; i++) {
            pokemonBase.push(await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
        }
        // console.log(pokemonBase);

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
                type: e.data.types[0].type.name,
            }
        })
        Pokemon.findAll({include:{model:Type}})
        .then(dbPokemon => {
            dbPokemon = dbPokemon.concat(resultado);

            res.send(dbPokemon);

        })


    } catch (error) {
        next(error)
    }

}

// Búsqueda de pokemones por ID (Obtener un solo pokemón)
//TODO: Verificar por qué no está tomando el id de la base de datos

    async function getOnePokemon(req, res, next) {

        try {
            const { id } = req.params
            let pkInfo; 

            if(isNaN(id)){
                // pkInfo = await Pokemon.findByPk(id)
                pkInfo  = await Pokemon.findOne({
                    where: {
                        id: id
                    },
                    include: {
                        model: Type
                    }
                })
            } else {
                pkInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            }

              pkInfo = pkInfo.data
            let mostrarPk = {
                name: pkInfo.name,
                image: pkInfo.sprites.other["official-artwork"].front_default,
                height: pkInfo.height,
                weight: pkInfo.weight,
                hp: pkInfo.stats[0].base_stat,
                strenght: pkInfo.stats[3].base_stat,
                speed: pkInfo.stats[5].base_stat,
                defense: pkInfo.stats[2].base_stat,
                type: pkInfo.types[0].type.name,

                        }
            res.send(mostrarPk ? mostrarPk : "No existe el pokemon")
        } catch (error) {
            
        }
        
    }
        //agregar pokemones 
        //TODO: agregar funcionalidad que incluya los tipos
    async function addPokemon(req, res, next){
        try {
            const {name, hp, strenght, defense, speed, height, weight, image, type} = req.body;

            const newPokemon = Pokemon.create({name, hp, strenght, defense, speed, height, weight, image })
            //await newPokemon.addType(type)

            res.send(newPokemon)
        } catch (error) {
            next(error)
        }
    }


    async function searchPokemon(req, res, next){
            
        let { name } = req.query;
           
            if (name) {
                // name = `%${name}%`;
                name = "%" + name + "%";
                Pokemon.findAll({
                    where:{
                        [Sequelize.Op.or]: [
                            {
                                name:{
                                    [Sequelize.Op.iLike]: name,
                                }
                            }
                        ]
                    }
                })
                .then((pk)=>{
                    res.json(pk);
                })
                .catch(next); 
            }
            Pokemon.findAll()
            .then(datos => {
                datos.length > 0 ? res.json(datos)
                :
                axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(async pokes => {
                    console.log("Dato Global", pokes );
                    return await Promise.all(
                        pokes.data.map(pk =>{
                            console.log("Dato Específico", pk);
                            return {
                                name: pk.name,
                                hp: pk.stats[0].base_stat
                            }
                        })
                    ).then(respuesta =>{
                        res.json(respuesta)
                    })
                })
            }).catch(next)


    }



module.exports = {
    getPokemons,
    getOnePokemon,
    addPokemon,
    searchPokemon
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