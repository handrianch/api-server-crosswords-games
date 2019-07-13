'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('numbers').notNullable()
      table.text('descriptions')
      table.string('type').notNullable()
      table.string('options')
      table.string('answer')
      table.integer('timer').notNullable()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
