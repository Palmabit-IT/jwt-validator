'use strict'

const jwt = require('jsonwebtoken')
const CreatorValidator = require('./CreatorValidator')

const respondWithError = (message, err) => {
  return {
    statusCode: 401,
    message: message || 'Unauthorized',
    error: err
  }
}

module.exports = (token, secret, callback) => {

  if (!token || token.length === 0) {
    callback(respondWithError('Missing token'))
    return;
  }

  const tokenData = token.split(' ');

  if (tokenData.length < 2 || tokenData[0] !== 'Bearer') {
    callback(respondWithError('Validator needs a Bearer token'))
    return;
  }

  const creatorValidator = new CreatorValidator(jwt, secret)
  creatorValidator.validate(tokenData[1], callback)
}
