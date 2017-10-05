const router = require('express').Router()
const {User, Delivery} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:userId/deliveries', (req, res, next) => {
  const userId = req.params.userId
  Delivery.findAll({where: {userId}})
  .then(deliveries => {
    res.send(deliveries);
  })
})