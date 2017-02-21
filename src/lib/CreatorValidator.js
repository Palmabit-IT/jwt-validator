'use strict'

class CreatorValidator {

  constructor(jwt, secret) {
    this.jwt = jwt
    this.secret = secret
  }

  sign(payload, callback) {
    callback(null, this.jwt.sign(payload, this.secret))
  }

  validate(token, callback) {
    this.jwt.verify(token, this.secret, (err, data) => {
      if (err) {
        callback(err)
      } else {
        callback(null, data)
      }
    })
  }
}


module.exports = CreatorValidator