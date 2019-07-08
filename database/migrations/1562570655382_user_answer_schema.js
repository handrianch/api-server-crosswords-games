'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAnswerSchema extends Schema {
  up () {
    this.create('user_answer', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('answer_id').unsigned().references('id').inTable('answers')
      table.string('answer')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_answers')
  }
}

module.exports = UserAnswerSchema
