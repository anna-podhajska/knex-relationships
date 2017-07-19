var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profiles/:id', function (req, res) {
  var id = req.params.id
  db.getUser(id, req.app.get('connection'))
    .then(function (user) {
        res.render('profiles', user)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


router.get('/addNew', function (req, res) {
  res.render('newAnimal')
})

router.post("/addNew", function (req, res) {
    db.newUser(req.body, req.app.get('connection'))
      .then(function() {
        res.redirect('/')
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})






module.exports = router
