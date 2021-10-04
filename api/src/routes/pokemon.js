const { Router } = require('express');
// const { router } = require('../app');
const {  getPokemons, getOnePokemon, addPokemon, searchPokemon, getPkFromDB, getPkFromApi } = require('../controllers/pokemonController');
const router = Router();

router.get("/", getPokemons)
router.get("/one/:id", getOnePokemon)
router.post("/add", addPokemon)
router.get("/searchName", searchPokemon)
router.get("/database", getPkFromDB)
router.get("/api", getPkFromApi)

module.exports = router;