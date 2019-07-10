'use strict'

const Crossword = use('App/Models/Crossword')
const Database = use('Database')

class CrosswordController {

  async index ({ request, response, auth }) {
    const user = await auth.getUser()
    const results = await user.crosswords().fetch()

    return response.status(200).send({data: results})
  }

  async answers ({request, response, auth, params}) {
    const user = await auth.getUser()
    // const answers = await user.answers().fetch()
    const results = await user.crosswords()
                              .where('crosswords.id', params.id)
                              .with('answers.users', (builder) => {
                                builder.select('id').where('user_id', user.id)
                              })
                              .fetch()
    // const result = {crosswords: results, answers: answers}

    return response.status(200).send({data: results})
  }

  async userAnswers ({request, response, auth, params}) {
    // return response.status(200).send({message: 'ok'})
    const user = await auth.getUser()
    const results = await user.answers().fetch()
    return response.status(200).send({data: results})
  }

  async store ({ request, response, auth, params }) {
    const { answer } = request.all()
    const answerId = params.id
    const user = await auth.getUser()

    await user.answers().detach(answerId)
    await user.answers().attach(answerId, (row) => {
      if (row.answer_id === answerId) {
        row.answer = answer
      }
    })

    user.answers = await user.answers().fetch()

    return response.status(201).json(user)
  }

}

module.exports = CrosswordController
