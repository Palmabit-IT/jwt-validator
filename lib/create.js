'use strict'

const jwt = require('jsonwebtoken')
const CreatorValidator = require('./CreatorValidator')

module.exports = (payload, secret, callback) => {
  const creatorValidator = new CreatorValidator(jwt, secret)
  creatorValidator.sign(payload, callback)
}
