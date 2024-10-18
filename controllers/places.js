const router = require('express').Router()
const places = require("../models/places.js")

router.post('/', (req, res) => {
    console.log(req.body)

    router.post('/', (req, res) => {
        // console.log(req.body)
        if (!req.body.pic) {

          // Default image if one is not provided

          req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
          req.body.city = 'Anytown'
        }
        if (!req.body.state) {
          req.body.state = 'USA'
        }
        res.send('POST /places')
      })
        places.push(req.body)
        res.redirect('/places')
    })
  

router.get('/new', (req, res) => {
    res.render('places/new')
  })

router.get('/', (req, res) => {
    res.render('places/index', {places})
})     

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id] })
    }
  })
  

  
module.exports = router
