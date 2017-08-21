const express = require('express');
const morgan = require('morgan');
const expressEjsLayouts = require('express-ejs-Layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const env = require('./config/env');
const router = require('./config/routes');
const methodOverride = require('method-override');

//settings
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

//middleware
mongoose.connect(env.db);
app.use(morgan('dev'));
app.use(expressEjsLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(req => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(router);

app.liste(env.port, () => console.log(`Express has loaded on port: ${env.port}`));

app.use(express.static(`${__dirname}/public`));
