const User = require('../models/user.model');

// simple test
exports.test = function (req, res) {
  res.send('greetings from the User test controller')
}

exports.user_get_all = function (req, res) {
  User.find({}, function (err, user) {
    if (err) return err;
    console.log("get all Users:\n", user)
    res.json(user)
  })
};

exports.user_create = function (req, res) {
  let user = new User({
    userName: req.body.userName,
    email: req.body.email,
    bio: req.body.bio,
    image: req.body.image,
  })
  console.log("user just created: \n", user)
  user.save(function (err) {
    if (err) {
      return err;
    }
    res.json(user)
  })
};