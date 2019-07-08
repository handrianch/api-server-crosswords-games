'use strict'

class UserController {
  async profile ({request, response, auth}) {
    return auth.getUser()
  }
}

module.exports = UserController
