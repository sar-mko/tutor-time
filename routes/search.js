const express = require('express')
const router = express.Router()
const searchController = require('../controllers/search') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', searchController.getIndex)

router.post('/addLibrary', ensureAuth, searchController.addLibrary)

router.post('/addTutor', ensureAuth, searchController.addTutor)



module.exports = router