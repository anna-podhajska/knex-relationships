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

router.get("/profiles/:id/addPost", function (req, res) {
    var id = req.params.id
    res.render("addPost", {userid: id})
})

router.post("/profiles/:id/addPost", function (req, res) {
  var id = req.params.id
  var newPost = {
    user_id: id,
    title: req.body.title,
    content: req.body.content
  }
  db.newPost(newPost, req.app.get('connection'))
  .then(function(newPostIdArray) {
    res.redirect("/profiles/"+id)
  })
})


router.get('/profiles/:id', function (req, res) {
  var id = req.params.id
  db.getUser(id, req.app.get('connection'))
  .then(function (user) {
    db.getUserPosts(id, req.app.get('connection'))
      .then(function(userPostsArray) {
        user.posts = userPostsArray
        res.render('profiles', user)
      })
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
