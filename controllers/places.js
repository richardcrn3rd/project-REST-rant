const router = require('express').Router()
const places = require("../models/places")

router.get('/', (req, res) => {
    res.render('places/index', {places})
})    

router.get('/new', (req, res) => {
    res.render('places/new')
})  

  
//localhost:3000/places/{ID}/edit
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)

    if (isNaN(id)) {
        res.render('error404')
    }   
    else if (!places[id]) {
        res.render('error404')
    }   
    else {
        res.render('places/edit', { place: places[id], id: id })
    }
})

router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'https://lh5.googleusercontent.com/p/AF1QipMXy1seSqEXdNBJdboqCWPGoFsYuU-Fn7w2cIEu=w640-h640-n-k-no'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'NC'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })

// SHOW ROUTE
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show', {place: places[id], id:id })
    }
  })

  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/200/300'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'NC'
    }
    places.push(req.body)
    res.redirect(`/places/${id}`)
})

    // DELETE FUNCTION
    router.delete('/:id/delete', (req, res) => {
        let id = Number(req.params.id)
        if (isNaN(id)) {
          res.render('error404')
        }
        else if (!places[id]) {
          res.render('error404')
        }
        else {
          places.splice(id, 1)
          res.redirect('/places')
        }
      })
      

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })

  
module.exports = router