const express = require('express')
const router = express.Router()
const librariesController = require('../controllers/libraries') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', librariesController.getLibraries)
router.get('/tutors/:id', librariesController.getTutors)


module.exports = router