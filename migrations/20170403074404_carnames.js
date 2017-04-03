
exports.up = function(knex) {
    return knex.schema.createTable('cars', c => {
      c.increments('id')
      c.string('brand')
      c.string('model')
      c.integer('year')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
}
