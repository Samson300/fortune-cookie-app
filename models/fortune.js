const db = require('./conn');

class Fortune {
    static getAll() {
        return db.any('select * from fortune');
    }
}

module.exports = Fortune;