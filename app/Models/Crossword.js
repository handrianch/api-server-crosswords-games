'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Crossword extends Model {
  answers () {
    return this.hasMany('App/Models/Answer', 'id', 'crossword_id')
  }

  users () {
    return this.belongsToMany('App/Models/User').pivotTable('user_crossword').withPivot(['is_finished'])
  }
}

module.exports = Crossword
