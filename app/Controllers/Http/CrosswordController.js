'use strict'

class CrosswordController {

  async index ({ request, response, view }) {
    return response.status(200).send({message: 'ok'})
  }

  async answers ({request, response, auth}) {
    return response.status(200).send({message: 'ok'})
  }

  async userAnswers ({request, response, auth}) {
    return response.status(200).send({message: 'ok'})
  }
}

module.exports = CrosswordController
