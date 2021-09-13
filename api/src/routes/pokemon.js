const { Router } = require('express');
// const { router } = require('../app');
const {  getPokemons, getOnePokemon, addPokemon } = require('../controllers/pokemonController');
const router = Router();

router.get("/", getPokemons)
router.get("/one/:id", getOnePokemon)
router.post("/add", addPokemon)

module.exports = router;