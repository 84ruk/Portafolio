const { Router } = require('express');


const { contact } = require('../controllers/contact');

const router = Router();



router.post("/", contact);




module.exports = router;