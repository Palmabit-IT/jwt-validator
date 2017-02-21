# JWT Generator/Validator

Generator and validator of a JWT token containing custom data

## Usage

```js
const { createToken, validateToken } = require('jwt-validator')

const SECRET = 'custom jwt secret'
const payload = { /* custom data */ }

/**
 * To generate a token
 */
createToken(payload, SECRET, (err, token) => {
  // token is a JWT signed token
})

/**
 * To validate a token
 */
validateToken('token', SECRET, (err, data) => {
  // data is the decoded token
})
```

## Development

```
npm install
```

## Test

Run all tests

```
npm test
```

## License

[MIT license](LICENSE)