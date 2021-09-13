const { Router } = require('express');
const { getTypes } = require('../controllers/typeController');
router = Router();


router.get("/", getTypes);

module.exports = router;