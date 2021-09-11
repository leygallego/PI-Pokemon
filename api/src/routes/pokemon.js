const { Router } = require('express');
const {  getPokemons } = require('../controllers/pokemonController');
router = Router();

router.get("/", getPokemons)

module.exports = router;