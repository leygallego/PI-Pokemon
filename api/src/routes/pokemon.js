const { Router } = require('express');
// const { router } = require('../app');
const {  getPokemons, getOnePokemon, addPokemon, searchPokemon } = require('../controllers/pokemonController');
const router = Router();

router.get("/", getPokemons)
router.get("/one/:id", getOnePokemon)
router.post("/add", addPokemon)
router.get("/searchName", searchPokemon)

module.exports = router;