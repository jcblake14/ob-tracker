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

router.delete('/:id/:userId', (req, res, next) => {
  const {id, userId} = req.params;
  Delivery.destroy({where: {id}})
  .then(destroyed => {
    return Delivery.findAll({where: {userId}})
  })
  .then(deliveries => {
    res.send(deliveries);
  })
})