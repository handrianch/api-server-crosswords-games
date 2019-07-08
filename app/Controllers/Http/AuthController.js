'use strict'
const User = use('App/Models/User')
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
        // username: 'required|username|unique:users,username',
        email: 'required|email|unique:users,email',
        password: 'required'
      }

      const { username, email, password } = request.all()
      const validation = await validate(request.all(), rules)

      if(validation.fails()) {
        return response.status(400).json({"message": "Email sudah terdaftar"})
      }

      let user = new User()
      user.username = username
      user.email = email
      user.password = password

      await user.save()

      return auth
        .withRefreshToken()
        .attempt(email,password)
    }
}

module.exports = AuthController
