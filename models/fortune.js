const db = require('./conn');

class Fortune {
    static getAll() {
        return db.any('select * from fortune');
    }
    static getRandom() {
        return db.any('select * from fortune')
            .then((data)=>{
                return data[Math.floor(Math.random()*data.length)];
            })
    }
}

module.exports = Fortune;