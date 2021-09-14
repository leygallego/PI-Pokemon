const { Router } = require('express');
const { getTypes, addTypes } = require('../controllers/typeController');
const router = Router();


router.get("/", getTypes);
router.post("/add", addTypes);


module.exports = router;