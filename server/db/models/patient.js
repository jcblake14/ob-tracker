'use strict';
var Sequelize = require('sequelize');
var db = require('../db.js')

module.exports = db.define('patient', {
  date_of_birth: Sequelize.DATE,
  gravity: Sequelize.INTEGER,
  parity: Sequelize.INTEGER,
  bmi: Sequelize.INTEGER
},{
  getterMethods: {
    age: function(){
      return new Date() - this.date_of_birth
    }
  }
});