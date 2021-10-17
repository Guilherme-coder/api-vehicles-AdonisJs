'use strict'

const Motorcycle = use('App/Models/Motorcycle/Motorcycle')
const motorcycleRepository = use('App/Repository/Motorcycle/Motorcycle')
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
    return motorcycleRepository.index()
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
    return await motorcycleRepository.store(request, auth)
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
    return await motorcycleRepository.show(params)
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
    return await motorcycleRepository.destroy(params, auth, response)
  }
}

module.exports = MotorcycleController
