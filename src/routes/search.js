const express = require('express');

const router = express.Router();
const courseController = require('../app/controllers/searchController');

router.get('/', courseController.show);

module.exports = router;
