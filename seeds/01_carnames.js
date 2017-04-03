
exports.seed = function(knex, Promise) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([
        {
          brand: 'GMC',
          model: 'Sierra',
          year: 14
        },
        {
          brand: 'Subaru',
          model: 'Legacy',
          year: 10
        },
        {
          brand: 'BMW',
          model: 'Grand Coupe',
          year: 15
        },
        {
          brand: 'Porsche',
          model: 'GT3',
          year: 15
        }
      ])
    })
}
