const Video = require('../models/video');

function videosIndex(req, res) {
  Video
  .find()
  .exec()
  .then(videos => {
    return res.render('videos', { videos });
  })
  .catch(err => {
    return res.render('error', { error: err });
  });
}

function videosShow(req, res) {
  Video
  .findById(req.params.id)
  .exec()
  .then(video => {
    if (!video) {
      return res.render('error', { error: ' No video found!' });
    }
    return res.render('videos/show', { video });
  })
  .catch(err => {
    return res.render('error', { error: err });
  });
}

function videosNew(req, res) {
  return res.render('videos/new');
}

function videosCreate(req, res) {
  req.body.youtubeId = req.body.youtubeId.split('=').pop();
  Video
    .create(req.body)
    .then(video => {
      if (!video) return res.render('error', {
        error: 'No video was created' });
      return res.redirect('/videos');
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function videosEdit(req, res) {
  Video
  .findById(req.params.id)
  .exec()
  .then(video => {
    if (!video) {
      return res.render('error', { error: 'No video found!' });
    }
    return res.render('videos/edit', { video });
  })
  .catch(err => {
    return res.render('error', { error: err });
  });
}

function videosUpdate(req, res) {
  req.body.youtubeId = req.body.youtubeId.split('=').pop();
  Video
    .findById(req.params.id)
    .exec()
    .then(video => {
      if (!video) {
        return res.render('error', { error: 'No video found' });
      }
      for (const field in req.body) {
        video[field] = req.body[field];
      }
      return video.save();
    })
    .then(video => {
      if (!video) {
        return res.render('error', { error: ' Something went wrong during the update, please try again '});
      }
      return res.render('videos/show', { video });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function videosDelete(req, res) {
  Video
  .findByIdAndRemove(req.params.id)
  .exec()
  .then(() => {
    return res.redirect('/videos');
  })
  .catch(err => {
    return res.render('error', { error: err });
  });
}

module.exports = {
  index: videosIndex,
  show: videosShow,
  new: videosNew,
  create: videosCreate,
  edit: videosEdit,
  update: videosUpdate,
  delete: videosDelete
};
