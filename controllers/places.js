const router = require('express').Router()
const places = require("../models/places")

router.get('/', (req, res) => {
    res.render('places/index', {places})
})    

router.get('/new', (req, res) => {
    res.render('places/new')
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
      res.render('places/show', {place: places[id]})
    }
  })

// router.post('/', (req, res) => {
//     console.log(req.body)

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
    //     // res.send('POST /places')
    //   })
        places.push(req.body)
        res.redirect('/places')
    })
  
    // DELETE FUNCTION
    router.delete('/:id', (req, res) => {
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
      
// //localhost:3000/places/{ID}/edit
// router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }   else if (!places[id]) {
//         res.render('error404')
//     }   else {
//         res.render('places/edit', { place: places[id], id:id })
//     }
// })
// router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         // Dig into req.body and make sure data is valid
//         if (!req.body.pic) {
//             // Default image if one is not provided
//             req.body.pic = 'http://placekitten.com/200/300'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'NC'
//         }
  
//         // Save the new data into places[id]
//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
//   })
  




//localhost:3000/places/{ID}/show
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }   else if (!places[id]) {
        res.render('error404')
    }   else {
        res.render('places/show', { place: places[id], id: id })
    }
})


// // router.get('/', (req, res) => {
// //     res.render('places/index', {places})
// // })    


// //     if (isNaN(id)) {
// //         res.render('error404')
// //     }
// //     else if (!places[id]) {
// //         res.render('error404')
// //     }
// //     else {
// //       res.render('places/edit', { place: places[id] })
// //     }
// //   })
  

  
module.exports = router