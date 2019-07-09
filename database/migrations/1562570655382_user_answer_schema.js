'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAnswerSchema extends Schema {
  up () {
    this.create('user_answer', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade').onUpdate('cascade')
      table.integer('answer_id').unsigned().references('id').inTable('answers').onDelete('cascade').onUpdate('cascade')
      table.string('answer').defaultTo('')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_answer')
  }
}

module.exports = UserAnswerSchema
