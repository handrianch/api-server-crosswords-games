'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  // Route.post('login', 'AuthController.login')
  Route.post('user', 'AuthController.register')
}).prefix('api/v1')

Route.group(() => {
  Route.get('/question', 'QuestionController.index')
  Route.post('/answer', 'AnswerController.store')
 
}).prefix('api/v1').middleware('auth')
