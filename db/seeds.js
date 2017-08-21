const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const env = require('../config/env');

const Video = require('..models/video');

mongoose.connect(env.db, () => {
  console.log('Connectedddd');
});


Video.collection.drop();
