'use strict'

const Motorcycle = use('App/Models/Motorcycle/Motorcycle')
const Hash = use("Hash")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with motorcycles
 */
class MotorcycleController {
  /**
   * Show a list of all motorcycles.
   * GET motorcycles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const motorcycles = await Motorcycle.all()
    return motorcycles
  }

  /**
   * Render a form to be used for creating a new motorcycle.
   * GET motorcycles/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new motorcycle.
   * POST motorcycles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, auth, response }) {
    const data = request.all()
    const motorcycle = await Motorcycle.create({
      advertiser: auth.user.id,
      brand: data.brand,
      model: data.model,
      description: data.description,
      category: data.category,
      year: data.year,
      price: data.price,
      capacity: data.capacity,
      picture: data.picture
    })

    return motorcycle
  }

  /**
   * Display a single motorcycle.
   * GET motorcycles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const motorcycle = await Motorcycle.findOrFail(params.id)
    return motorcycle
  }

  /**
   * Render a form to update an existing motorcycle.
   * GET motorcycles/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update motorcycle details.
   * PUT or PATCH motorcycles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a motorcycle with id.
   * DELETE motorcycles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, request, response }) {
    const motorcycle = await Motorcycle.findOrFail(params.id)
    const userId = auth.user.id
    if(userId === motorcycle.advertiser)
      motorcycle.delete()
    else{
      return response.status(401).json({ error: 'não tens permissão para deletar este registro' })
    }
  }
}

module.exports = MotorcycleController
