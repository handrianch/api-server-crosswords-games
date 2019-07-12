'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserCrossword extends Model {
  static get table () {
    return 'user_crossword'
  }
}

module.exports = UserCrossword
