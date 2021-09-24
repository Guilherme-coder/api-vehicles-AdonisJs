'use strict'

const Car = use('App/Models/Car/Car')
const Hash = use("Hash")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cars
 */
class CarController {
  /**
   * Show a list of all cars.
   * GET cars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const cars = await Car.all()
    return cars
  }

  /**
   * Render a form to be used for creating a new car.
   * GET cars/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new car.
   * POST cars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth, response }) {
    const data = request.all()
    const car = await Car.create({ 
      advertiser: auth.user.id,
      brand: data.brand,
      model: data.model,
      description: data.description,
      year: data.year,
      price: data.price,
      engine: data.engine,
      picture: data.picture
    })
    return car
  }

  /**
   * Display a single car.
   * GET cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const car = await Car.findOrFail(params.id)
    return car
  }

  /**
   * Render a form to update an existing car.
   * GET cars/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update car details.
   * PUT or PATCH cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a car with id.
   * DELETE cars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, request, response }) {
    const car = await Car.findOrFail(params.id)
    const userId = auth.user.id
    if(userId === car.advertiser)
      car.delete()
    else
    return response.status(401).json({ error: 'não tens permissão para deletar este registro' })
  }
}

module.exports = CarController
