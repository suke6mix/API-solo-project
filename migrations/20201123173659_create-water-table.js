
exports.up = function(knex, Promise) {
  return knex.schema.createTable('water', (table) => {
    table.increments();
    table.text('name');
    table.text('manufacturer');
    table.integer('hardness');
    table.boolean('carbonated');
    table.text('rating');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('water');
};
