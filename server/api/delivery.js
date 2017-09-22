const router = require('express').Router()
const {Delivery} = require('../db/models')
module.exports = router

router.post('/', (req, res, next) => {
  const delivery = req.body;
  Delivery.create(delivery)
  .then(created => {
    res.send('created')
  })
})
