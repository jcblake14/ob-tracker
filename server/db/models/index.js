const User = require('./user')
const Delivery = require('./delivery');
const Patient = require('./patient');

Delivery.belongsTo(User);
Delivery.belongsTo(Patient);

module.exports = {
  User,
  Delivery,
  Patient
}