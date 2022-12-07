const db = require('./db')
const Post1 = db.sequelize.define('postagens',{
    sala: {
        type: db.Sequelize.STRING
    },
    titulo: {
        type: db.Sequelize.TEXT 
    },
    sinopse: {
        type: db.Sequelize.TEXT
    },
    cadastro: {
        type: db.Sequelize.TEXT
    }
})
//Post1.sync({force:true})
module.exports = Post1

