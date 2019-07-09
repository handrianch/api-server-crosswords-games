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
const Answer = use('App/Models/Answer')

class DatumSeeder {
  async run () {
    const crosswords = await Factory.model('App/Models/Crossword').createMany(5)
    const users      = await Factory.model('App/Models/User').createMany(3)
    const crosswordsId = crosswords.map(item => item.id)
    let questions = [
      {
        "question": "Nama teman yang kulit nya ngeletek",
        "answer" : "ian",
        "indexes": "0,6,12",
        "is_clue": true,
        "number": 1,
        "type": "menurun",
      },
      {
        "question": "Nama teman rumah sebelah yang pake motor suzuki gsx",
        "answer" : "gsx",
        "indexes": "2,8,14,20",
        "is_clue": false,
        "number": 3,
        "type": "menurun",
      },
      {
        "question": "nama teman yang tidur kaya cicak",
        "answer" : "galih",
        "indexes": "5,11,17,23,29",
        "is_clue": false,
        "number": 6,
        "type": "menurun"
      },
      {
        "question": "nama teman yang pake laptop acer dari bandung",
        "answer" : "naufal",
        "indexes": "12,13,14,15,16,17",
        "is_clue": false,
        "number": 3,
        "type": "mendatar"
      },
      {
        "question": "nama teman yang rumah nya plosok banget",
        "answer" : "aqil",
        "indexes": "30,31,32,33",
        "is_clue": false,
        "number": 6,
        "type": "mendatar"
      },
    ]

    for(let i = 0; i < crosswords.length; i++) {
      questions[i].crossword_id = crosswords[i].id
    }

    const answers = await Answer.createMany(questions)
    const answersId = answers.map(item => item.id)

    users.forEach(item => {
      item.crosswords().attach(crosswordsId)
      item.answers().attach(answersId)
    })
  }
}

module.exports = DatumSeeder
