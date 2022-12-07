const express = require("express");
const app = express();
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const Post1 = require('./models/Post1')
//const Usuario = require('./models/Usuario')
const Sequelize = require('sequelize')

app.engine('handlebars', engine({defaultLayout: 'main',}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use('/public', express.static(__dirname + '/public'))


const sequelize = new Sequelize ('postapp', 'root', 'admin', {
    host: "localhost",
    dialect: "mysql"
})

app.get('/', function(req, res){
    Post1.findAll({order:[['id', 'DESC']]}).then(function(posts){
        res.render('home', {posts:posts})
    })
})

app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    Post1.create({
        sala: req.body.sala,
        titulo: req.body.titulo,
        sinopse: req.body.sinopse,
        cadastro: req.body.cadastro
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um Probleminha: " + erro)
    })
    
})

app.listen(8093, function(){
    console.log("Servidor encontrado com sucesso http:localhost:8093")
});