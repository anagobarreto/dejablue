const express = require('express');
const router = express.Router();

const videos = require('../controllers/videos');
const sessions = require('../controllers/sessions');
const users = require('../controllers/users');

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in.');
      res.redirect('/login');
    });
  }

  return next();
}

router.get('/', (req, res) => res.render('index'));

router.route('/videos')
  .get(videos.index)
  .post(videos.create);
router.route('/videos/new')
  .get(secureRoute, videos.new);
router.route('/videos/:id')
  .get(videos.show)
  .put(secureRoute, videos.update);
router.route('/videos/:id/edit')
  .get(secureRoute, videos.edit);
router.route('/videos/:id')
  .delete(secureRoute, videos.delete);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);
router.route('/logout')
  .get(sessions.delete);
router.route('/register')
  .get(users.new)
  .post(users.create);

module.exports = router;
