const db = require('./db')
const Usuario = db.sequelize.define('usuarios',{
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.TEXT
    }
})
Usuario.sync({force:true})
