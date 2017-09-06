const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const env = require('../config/env');

const Video = require('../models/video');

mongoose.connect(env.db, () => {
  console.log('Connectedddd');
});


Video.collection.drop();

Video
  .create([
    {
      title: 'Chrome Sparks - The meaning of Love',
      description: 'Published on Jul 11, 2014. Music video for The Meaning of Love by Chrome Sparks from his Goddess EP',
      youtubeId: 'lM2XJFph-eg'
    }, {
      title: 'HOME - This Will Pass',
      description: 'Published on Jun 12, 2016. Music from the album "Falling Into Place" Check out HOME',
      youtubeId: 'Chbc3CrXhNo'
    }, {
      title: 'SBTRKT - Pharaohs',
      description: 'Uploaded on Jun 17, 2011 Pharaohs by SBTRKT, featuring Roses Gabor. Taken from the album SBTRKT released in 2011 on Young Turks.',
      youtubeId: 'ErYAGQZs8e0'
    }, {
      title: 'Alice - Pogo',
      description: 'Uploaded on Jul 18, 2007 Music and video by Pogo.',
      youtubeId: 'pAwR6w2TgxY'
    }, {
      title: 'S N G C - Suddenly the Feelings are Ours',
      description: 'Published on Jul 9, 2013 Taken from the 2013 EP The Nowhere Team',
      youtubeId: 'QR5vNxw68ZM'
    }, {
      title: 'Movement - Us',
      description: 'Published on Sep 19, 2013. The official video for Movement 2nd single Us directed by Dave Ma',
      youtubeId: 'jpIz5sAu0B8'
    }, {
      title: 'Daniel Avery - Drone Logic',
      description: 'Published on Mar 24, 2014. Taken from Daniel Avery Drone Logic LP. Out now on vinyl, digital and CD from iTunes, or your local record shop.',
      youtubeId: 'eS0CO-yPmO4'
    }, {
      title: 'Jon Hopkins - Open Eye Signal',
      description: 'Published on Apr 24, 2013',
      youtubeId: 'Q04ILDXe3QE'
    }, {
      title: 'Kalki - Varanasi',
      description: 'Published on Apr 20, 2016. - GET READY FOR A BIG TRIP - A film by Basile Pierrat',
      youtubeId: '_6B9tBRFEeE'
    }, {
      title: 'Tame Impala - Let It Happen',
      description: 'Published on Aug 17, 2015. Music video by Tame Impala performing Let It Happen. (C) 2015 Modular Recordings',
      youtubeId: 'pFptt7Cargc'
    }, {
      title: 'Flume - Never Be Like You ft. Kai',
      description: 'Published on Jan 15, 2016. Flume - Never Be Like You feat. Kai',
      youtubeId: 'Ly7uj0JwgKg'
    }
  ])
  .then(videos => {
    console.log(`${videos.length} were created`);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  })
  .finally(() => {
    mongoose.connection.close();
  });
