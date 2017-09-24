'use strict';
var Sequelize = require('sequelize')
var db = require('../db.js')

module.exports = db.define('delivery', {
  date: {
    type: Sequelize.DATE
  },
  patient_age: {
    type: Sequelize.INTEGER
  },
  gravidity: {
    type: Sequelize.INTEGER
  },
  parity: {
    type: Sequelize.INTEGER
  },
  bmi: {
    type: Sequelize.INTEGER
  },
  gestation: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: null
    /* vaginal, vaginal operative, c-section*/
  },
  indication: {
    type: Sequelize.STRING,
    defaultValue: null
    /* breech position, failed induction, elective, repeat c-section, non-reassuring fetal heart tracing, abruption, pregnancy-induced hypertensive disorder, second stage arrest */
  },
  gestational_age: {
    type: Sequelize.INTEGER,
    defaultValue: null
    /* days in table, weeks and days in view */
  },
  induced: {
    type: Sequelize.ENUM('Yes', 'No'),
    defaultValue: 'No'
  },
  induction_reason: {
    type: Sequelize.STRING,
    defaultValue: null
    /* see https://paper.dropbox.com/doc/Rachels-App-0bc5luFXtzRFZrFEncD0V */
  },
  position: {
    type: Sequelize.STRING
  }
});
