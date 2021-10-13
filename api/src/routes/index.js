const { Router } = require('express')

const getAll = require('../controllers/getAll.js')
const getCountry = require('../controllers/getCountry.js')
const setActivity = require('../controllers/setActivity.js')
const getActivities = require('../controllers/getActivities')

const router = Router()

router.get('/countries', getAll)
router.get('/countries/:id', getCountry)
router.get('/activity', getActivities)
router.post('/activity', setActivity)
module.exports = router
