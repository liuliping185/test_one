var mongoose = require('mongoose')
var chalk = require('chalk')

var config = require('./config')

var options = {
  db: {
    native_parser: true
  },
  server: {
    auto_reconnect: true,
    poolSize: 5
  }
}

var connectionString = config.mongodb

mongoose.connect( connectionString, options, function (err, res) {
  if (err) {
    console.log('[mongoose log] Error connecting to: ', connectionString + '. ' + err)
    return process.exit(1)
  } else {
    return console.log('[mongoose log hz-api-cloud] Successfully connected to:\n',
      chalk.blue.underline.bold(connectionString))
  }
})

var db = mongoose.connection

var db = mongoose.connection

db.on('error', console.error.bind(console, 'mongoose connection error:'))

db.once('open', function () {
  return console.log('mongoose open success')
})

module.exports = db
