const User = require('../models/user');

function usersCreate(req, res) {
  User
    .create(req.body)
    .then((user) => {
      req.flash('info', `Thanks for registering, ${user.email}! Please login`);
      return res.redirect('/login');
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).render('users/new', { message: 'Passwords do not match' });
      }
      res.status(500).end();
    });
}

function usersNew(req, res) {
  res.render('users/new');
}

module.exports = {
  create: usersCreate,
  new: usersNew
};
