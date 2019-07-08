'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserCrosswordsSchema extends Schema {
  up () {
    this.create('user_crossword', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade').onUpdate('cascade')
      table.integer('crossword_id').unsigned().references('id').inTable('crosswords').onDelete('cascade').onUpdate('cascade')
      table.boolean('is_finished').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('user_crossword')
  }
}

module.exports = UserCrosswordsSchema
