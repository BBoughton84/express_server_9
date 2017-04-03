const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
  knex('cars')
    .then(result => {
      res.send(result)
    })
})


router.post('/new', (req, res) => {
  var newBrand = req.body.brand
  var newModel = req.body.model
  var newYear = req.body.year
  knex('cars').insert({brand:newBrand, model:newModel, year:newYear}).returning(['id', 'brand', 'model', 'year'])
    .then(result => {
      res.send(result)
    })
})

router.patch('/:id', (req, res) => {
  var patchId = req.params.id
  var patchBrand = req.body.brand
  var patchModel = req.body.model
  var patchYear =  req.body.year
  knex('cars').where('id', patchId).update({brand:patchBrand, model:patchModel, year:patchYear}).returning(['id', 'brand', 'model', 'year'])
    .then(result => {
      res.send(result)
    })
})

router.delete('/:id', (req, res) => {
    var deleteId = req.params.id
    knex('cars').where('id', deleteId).del()
      .then(result => {
        res.send(200)
      })
})


module.exports = router
