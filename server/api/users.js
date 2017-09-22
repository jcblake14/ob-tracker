const router = require('express').Router()
const {User, Delivery} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

router.get('/:userId/deliveries', (req, res, next) => {
  const userId = req.params.userId
  console.log('user id', userId);
  Delivery.findAll({where: {userId}})
  .then(deliveries => {
    res.send(deliveries);
  })
})