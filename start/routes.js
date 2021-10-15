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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// rotas de auth
Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')

Route.post('/upload', 'Car/CarController.upload')

Route.group(() => {
  Route.get('/load_session', 'AuthController.loadSession')
}).middleware('auth')

// rotas de car
Route.group(() => {
  Route.resource('cars', 'Car/CarController').apiOnly()
}).middleware(['auth'])
// caso fossem criadas uma a uma
// Route.get('/cars', 'Car/CarController.index').middleware(['auth'])
// Route.get('/cars/:id', 'Car/CarController.show').middleware(['auth'])
// Route.post('/cars', 'Car/CarController.store').middleware(['auth'])
// Route.delete('/cars/:id', 'Car/CarController.destroy').middleware(['auth'])

// rotas de motorcycles
Route.group(() => {
  Route.resource('motorcycles', 'Motorcycle/MotorcycleController').apiOnly()
}).middleware(['auth'])
// caso fossem criamas uma a uma
// Route.get('/motorcycles', 'Motorcycle/MotorcycleController.index').middleware(['auth'])
// Route.get('/motorcycles/:id', 'Motorcycle/MotorcycleController.show').middleware(['auth'])
// Route.post('/motorcycles', 'Motorcycle/MotorcycleController.store').middleware(['auth'])
// Route.delete('/motorcycles/:id', 'Motorcycle/MotorcycleController.destroy').middleware(['auth'])