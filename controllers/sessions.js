const User = require('../models/user');

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).render('sessions/new', { message: 'Unrecognised credentials' });
      }

      req.session.userId = user.id;

      return res.redirect('/');
    });
}

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  create: sessionsCreate,
  new: sessionsNew,
  delete: sessionsDelete
};
