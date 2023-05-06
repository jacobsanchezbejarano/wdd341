const { body, validationResult } = require('express-validator')
const userValidationRules = () => {
  return [
    body('firstName').isString().isLength({ min: 3 }),
    body('lastName').isString().isLength({ min: 3 }),
    body('email').isEmail(),
    body('favoriteColor').isString().isLength({ min: 3 }),
    body('birthday').isISO8601().toDate(),
  ]
}
                    
const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  validate,
}