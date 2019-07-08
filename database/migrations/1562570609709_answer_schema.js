'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnswerSchema extends Schema {
  up () {
    this.create('answers', (table) => {
      table.increments()
      table.integer('crossword_id').unsigned().references('id').inTable('crosswords')
      table.integer('number').notNullable()
      table.text('question').notNullable()
      table.string('answer').notNullable()
      table.boolean('is_clue').defaultTo('false')
      table.enu('type', ['mendatar', 'menurun']).notNullable()
      table.string('indexes').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('answers')
  }
}

module.exports = AnswerSchema
