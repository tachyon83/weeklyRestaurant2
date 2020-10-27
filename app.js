// const url = require('url');
// const path = require('path');
// const static = require('serve-static');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
// important: this [cors] must come before Router
const cors = require('cors');
const router = express.Router();
const recipeDao = new (require('./models/RecipeTempDAO'))
const app = express();
// var socketio = require('socket.io')

// app.use('/', static(__dirname + '/html/'));
// app.use('/', static(__dirname + '/public'));
app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname + '/html/chat.html'));
    res.sendFile(__dirname + '/public/index.html');
})

router.route('/recipe/list').get((req, res) => {
    recipeDao.showListByCategory(req.query.req, (err, results) => {
        if (err) res.status(500);
        // res.end(JSON.stringify(results));
        res.json(results);
    })
})
router.route('/recipe/detail').get((req, res) => {
    recipeDao.showDetailById(req.query.req, (err, result) => {
        if (err) res.status(500);
        res.json(result);
    })
})
router.route('/recipe/new').get((req, res) => {
    recipeDao.createNewRecipe((err, result) => {
        if (err) res.status(500);
        res.json(result);
    })
})

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});