const router = require('express').Router()
const places = require("../models/places")

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
router.get('/new', (req, res) => {
    res.render('places/new')
  })

router.get('/', (req, res) => {
    res.render('places/index', {places})
})     


  
module.exports = router
