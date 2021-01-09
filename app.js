const http = require('http');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan')
const auth = require('./utils/auth')
const timeStampMiddleware = require('./utils/timestamp')
const webSettings = require('./configs/webSettings')
// important: this [cors] must come before Router
const cors = require('cors');
const router = express.Router();

const app = express();
app.use(morgan('short'))
app.use(express.json())
app.use(session(webSettings.sessionSettings))
app.use(cors(webSettings.corsSettings))
app.use(passport.initialize());
app.use(passport.session());
app.set('port', process.env.PORT || 3002);

// const sessionCheck = (req, res, next) => {
//     console.log(req.session.id)
//     next()
// }
// app.use(sessionCheck)

app.use(timeStampMiddleware)
app.use('/member', require('./routes/member'))
app.use('/recipe', auth, require('./routes/recipe'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    console.log('reached the end...404 or 500')
    console.log()
    // res.render('error');
});

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
    console.log()
});