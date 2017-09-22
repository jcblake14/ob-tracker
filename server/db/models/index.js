const User = require('./user')
const Delivery = require('./delivery');

Delivery.belongsTo(User);

module.exports = {
  User,
  Delivery
}