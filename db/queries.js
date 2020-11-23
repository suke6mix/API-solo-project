//Create a queries file
const knex = require('./knex');  // the connection

module.exports = {
    getAll(){
        return knex('water');
    },
    getOne(id) {
        return knex('water').where('id', id).first();
    },
    create(water) {
        // '*'はwaterがもつ全てのプロパティとid
        return knex('water').insert(water, '*');
    },
    update(id, water) {
        // '*'はwaterがもつ全てのプロパティとid
        return knex('water').where('id', id).update(water, '*');
    },
    delete(id) {
        return knex('water').where('id', id).del();
    }
}