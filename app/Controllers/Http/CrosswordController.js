'use strict'

const Crossword = use('App/Models/Crossword')
const Database = use('Database')

class CrosswordController {

  async index ({ request, response, view }) {
    let results = [];

    try {
      results = await Database.select('crosswords.*', 'user_crossword.is_finished',)
                              .from('crosswords')
                              .leftJoin('user_crossword', 'crosswords.id', 'user_crossword.crossword_id')
    } catch (e) {
      console.error(e)
    }

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
