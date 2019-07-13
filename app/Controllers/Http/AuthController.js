'use strict'
const User = use('App/Models/User')
// const Crossword = use('App/Models/Crossword')
// const Answer = use('App/Models/Answer')
const { validateAll } = use('Validator')

class AuthController {

    // async login({ request, auth, response }) {
    //   const { email, password } = request.all()

    //   return auth.attempt(email,password)
    // }

    async register({ request, auth, response }) {
      const rules = {
        name: 'required',
        email: 'required|email|unique:users,email',
        password: 'required',
        phone_number: 'required'
      }

      const messages = {
        'username.required': 'Username cannot be empty!',
        'email' : 'Email format must be correct!',
        'email.required': 'Email cannot be empty!',
        'email.unique': 'Email has been registered',
        'password.required': 'Password cannot be empty!',
        'phone_number.required': 'Phone number cannot be empty'
      }

      const newUser = request.only(['name', 'email', 'password','phone_number'])
      const validation = await validateAll(newUser, rules, messages)

      if(validation.fails()) {
        return response.status(400).send(validation.messages())
      }

      const user = await User.create(newUser)
      // const crosswords = await Crossword.query().select('id').pluck('id')
      // const answers    = await Answer.query().select('id').pluck('id')
      // user.crosswords().attach(crosswords)
      // user.answers().attach(answers)
      const token = await auth.withRefreshToken().attempt(user.email, newUser.password)
      let datauser = await User.query().select('id', 'name','email','phone_number').where('email', newUser.email).fetch()
      // return auth.withRefreshToken().attempt(user.email, newUser.password),User.query().select('id', 'username','email',).fetch()
      return {"data":datauser,"token":token}
    }
}

module.exports = AuthController
