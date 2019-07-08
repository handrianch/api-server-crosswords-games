'use strict'
const User = use('App/Models/User')
const Crossword = use('App/Models/Crossword')
const { validate } = use('Validator')

class AuthController {

    async login({ request, auth, response }) {
      const { email, password } = request.all()

      return auth
  		  .withRefreshToken()
  		  .attempt(email,password)
    }

    async register({ request, auth, response }) {
      const rules = {
        email: 'required|email|unique:users,email',
        password: 'required'
      }

      const newUser = request.only(['username', 'email', 'password'])
      const validation = await validate(newUser, rules)

      if(validation.fails()) {
        return response.status(400).send(validation.messages())
      }

      const user = await User.create(newUser)
      const crosswords = await Crossword.query().select('id').from('crosswords').pluck('id')
      user.crosswords().attach(crosswords)

      return auth.withRefreshToken().attempt(user.email, newUser.password)
    }
}

module.exports = AuthController
