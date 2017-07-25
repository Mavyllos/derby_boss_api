if (process.env.NODE_ENV !== 'production' && !process.env.IS_BUILD) {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const cookieSession = require('cookie-session');

const app = express();
app.disable('x-powered-by');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(cookieSession({
//   name: 'derby-boss',
//   secret: process.env.SESSION_SECRET,
//   secure: app.get('env') === 'production'
// }));
app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');
// const dashboard = require('./routes/dashboard');
const addresses = require('./routes/addresses');
const emergencies = require('./routes/emergencies');
const leagues = require('./routes/leagues');
const members = require('./routes/members');
const requirements = require('./routes/requirements');
const teams = require('./routes/teams');
// const register = require('./routes/register');
// const users = require('./routes/users');

app.use('/', index);
// app.use('/dashboard', dashboard);
app.use('/addresses', addresses);
app.use('/emergencies', emergencies);
app.use('/leagues', leagues);
app.use('/members', members);
app.use('/requirements', requirements);
app.use('/teams', teams);
// app.use('/register', register);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // display an error in json
  console.log(err);
  res.status(err.status || 500).json(err);
});

module.exports = app;
