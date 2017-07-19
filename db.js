
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  newUser: newUser
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users')
    .join("profiles", "users.id", "=", "user_id")
    .where('id', id)
    .first()
}

function newUser(data, connection){
  var newUserObject = {name: data.name, email: data.email}
  return connection('users')
    .insert(newUserObject)//pass a new id to be used later
    .then(function(newUserId) {//outputs the newuser [id]
      var newProfileObject = {// pass in the data == id (user_id) adding the deepest-fears column
        deepest_fears: data.deepest_fears,
        user_id: newUserId[0]//the user id position zero is assigned to user_id from other user table
      }
      return connection('profiles')
      .insert(newProfileObject)//finally update and add the new fear to the table from the newProfileObject
    })
}
