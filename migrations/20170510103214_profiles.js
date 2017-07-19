
exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('profile_id').primary()
    table.integer('user_id')
    table.string('image_url')
    table.string('deepest_fears')
    table.integer('age')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profiles')
}
