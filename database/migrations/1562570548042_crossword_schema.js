'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CrosswordSchema extends Schema {
  up () {
    this.create('crosswords', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('total_columns', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('crosswords')
  }
}

module.exports = CrosswordSchema
