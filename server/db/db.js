const Sequelize = require('sequelize')
const db = new Sequelize(
  // for deploy
  process.env.DATABASE_URL || 'postgres://localhost:5432/ob', {
    logging: false
  }
)

module.exports = db;