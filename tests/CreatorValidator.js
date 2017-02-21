'use strict'

const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const faker = require('faker')
const jwt = require('jsonwebtoken')
const CreatorValidator = require('./../src/lib/CreatorValidator')

const expect = chai.expect
chai.use(sinonChai)

const sign = require('./../src/lib/create').sign

describe('Generate creatorValidator tests', () => {

  it('should call jwt sign function', done => {

    const jwtMock = {
      sign: sinon.spy()
    }
    const secret = faker.random.uuid()
    const creatorValidator = new CreatorValidator(jwtMock, secret)

    const payload = faker.random.objectElement()

    creatorValidator.sign(payload, () => {
      expect(jwtMock.sign).to.have.been.calledWith(payload, secret)
      done()
    })
  })

  it('should get response from jwt sign function', done => {
    const token = faker.random.uuid()
    const secret = faker.random.uuid()

    const jwtMock = {
      sign: () => token
    }

    const creatorValidator = new CreatorValidator(jwtMock, secret)

    creatorValidator.sign(jwtMock, (err, response) => {

      expect(response).to.equal(token)

      done()
    })
  })

  it('should validate jwt token', done => {

    const secret = faker.random.uuid()
    const payload = faker.random.objectElement()

    const token = jwt.sign(payload, secret)

    const creatorValidator = new CreatorValidator(jwt, secret)

    creatorValidator.validate(token, (err, data) => {
      expect(data).to.equal(payload)
      done()
    })

  })

})