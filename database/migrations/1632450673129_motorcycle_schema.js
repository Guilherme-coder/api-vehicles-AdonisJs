'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MotorcycleSchema extends Schema {
  up () {
    this.create('motorcycles', (table) => {
      table.increments()
      table.integer('advertiser').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('brand', 100).notNullable()
      table.string('model', 100).notNullable()
      table.text('description')
      table.string('categoty', 50).notNullable()
      table.integer('year').unsigned()
      table.decimal('price', 11, 2)
      table.integer('capacity').unsigned().notNullable()
      table.string('picture', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('motorcycles')
  }
}

module.exports = MotorcycleSchema
