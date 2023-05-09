const express = require('express')
const router = express.Router()
const dardensController = require('../controllers/gardens') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, gardensController.getGardens)

router.post('/createGarden', gardensController.createGarden)

router.put('/markComplete', gardensController.markComplete)

router.put('/markIncomplete', gardensController.markIncomplete)

router.delete('/deleteTodo',gardensController.deleteTodo)

module.exports = router