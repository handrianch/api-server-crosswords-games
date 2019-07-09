'use strict'

/*
|--------------------------------------------------------------------------
| DatumSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatumSeeder {
  async run () {
    const crosswords = await Factory.model('App/Models/Crossword').createMany(5)
    const users      = await Factory.model('App/Models/User').createMany(3)
    const crosswordsId = crosswords.map(item => item.id)
    users.map(item => item.crosswords().attach(crosswordsId))
  }
}

module.exports = DatumSeeder
