const Sequelize = require('sequelize')
const db = new Sequelize(
  // for deploy
  process.env.HEROKU_POSTGRESQL_CHARCOAL_URL || 'postgres://localhost:5432/ob', {
    logging: false
  }
)

module.exports = db;