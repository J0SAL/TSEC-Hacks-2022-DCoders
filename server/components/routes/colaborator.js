const express = require('express')
const { colabRequest, colabStatus } = require('../controllers/colaborators')
const router = express.Router()

router.post('/request', colabRequest)
router.put('/update/status/:id', colabStatus)

module.exports = router