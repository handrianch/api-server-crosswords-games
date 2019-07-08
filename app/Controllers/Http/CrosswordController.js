'use strict'

const Crossword = use('App/Models/Crossword')
const Database = use('Database')

class CrosswordController {

  async index ({ request, response, auth }) {

    const user = await auth.getUser()
    const results = await user.crosswords().fetch()

    return response.status(200).send({data: results})
  }

  async answers ({request, response, auth}) {
    return response.status(200).send({message: 'ok'})
  }

  async userAnswers ({request, response, auth}) {
    return response.status(200).send({message: 'ok'})
  }
}

module.exports = CrosswordController
