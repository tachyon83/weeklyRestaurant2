// const url = require('url');
// const path = require('path');
// const static = require('serve-static');
const http = require('http');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passportLocal');
const bodyParser = require('body-parser')
// important: this [cors] must come before Router
const cors = require('cors');
const router = express.Router();
const recipeDao = new (require('./models/RecipesDummyDao'))
const app = express();
// var socketio = require('socket.io')

// const sessionSetting = (session({
//     secret: 'secret secretary',
//     resave: false,
//     saveUninitialized: false,
//     host: 'localhost',
//     port: 3002,
// }))
// app.use(sessionSetting)
app.use(session({ secret: "secret key" }))

// app.use('/', static(__dirname + '/html/'));
// app.use('/', static(__dirname + '/public'));
app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

// app.post('/member/login', (req, res, next) => {
//     console.log('came in')
//     passport.authenticate('local', (err, user, info) => {
//         if (err) { res.json({ result: err }) }
//         if (!user) { res.json({ result: false }) }
//         req.session.save(() => {
//             console.log('success')
//             res.json({ result: true })
//         })
//     })
//     next()
// })

router.post('/member/login', passport.authenticate('local', {
    failureRedirect: '/member/login',
    // failureFlash: true,
}), (req, res) => {
    req.session.save(function () {
        // console.log(req.user)
        res.json({ result: true })
    })
})

// app.get('/', function (req, res) {
//     // res.sendFile(path.join(__dirname + '/html/chat.html'));
//     res.sendFile(__dirname + '/public/index.html');
// })

// '/recipe/:command' => by params => differentiated in recipeDao
router.route('/recipe/list').get((req, res) => {
    recipeDao.findListByCategory(req.query.req, (err, results) => {
        if (err) res.status(500);
        // res.end(JSON.stringify(results));
        res.json(results);
    })
})
router.route('/recipe/detail').get((req, res) => {
    recipeDao.findDetailById(req.query.req, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    })
})
router.route('/recipe/modify').post((req, res) => {
    recipeDao.handleRecipeFromFront(req.query.req, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    })
})
router.route('/recipe/add').post((req, res) => {
    recipeDao.handleRecipeFromFront(req.query.req, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    })
})
router.route('/recipe/delete').post((req, res) => {
    recipeDao.deleteById(req.query.req, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    })
})
// router.route('/recipe/new').get((req, res) => {
//     recipeDao.createNewRecipe((err, result) => {
//         if (err) res.status(500);
//         res.json(result);
//     })
// })

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});