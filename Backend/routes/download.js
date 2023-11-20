const { Router } = require('express');


const { download } = require('../controllers/download');

const router = Router();



router.get("/", download);




module.exports = router;