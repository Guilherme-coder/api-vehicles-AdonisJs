'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments()
      table.integer('advertiser').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('brand', 100).notNullable()
      table.string('model', 100).notNullable()
      table.text('description')
      table.integer('year').unsigned()
      table.decimal('price', 11, 2).notNullable()
      table.decimal('engine', 3, 2).notNullable()
      table.string('picture', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarSchema
