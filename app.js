const http = require('http');
const express = require('express');
const session = require('express-session');
// const cookieParser = require('cookie-parser')
const passport = require('passport');
const webSettings = require('./configs/webSettings')
// important: this [cors] must come before Router
const cors = require('cors');
const router = express.Router();
const recipeDao = new (require('./models/RecipesDummyDao'))

const app = express();
app.use(express.json())
app.use(session(webSettings.sessionSettings))
app.use(cors(webSettings.corsSettings))
// app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());

app.set('port', process.env.PORT || 3002);

const sessionCheck = (req, res, next) => {
    console.log(req.session.id)
    next()
}
app.use(sessionCheck)

app.use('/member', require('./routes/member'))

// '/recipe/:command' => by params => differentiated in recipeDao
router.route('/recipe/list').get((req, res) => {
    recipeDao.findListByCategory(req.query.req, (err, result) => {
        if (err) res.status(500);
        // res.end(JSON.stringify(results));
        res.json(result);
    })
})
// router.route('/recipe/detail').post((req, res) => {
//     recipeDao.findDetailById(req.query.req, (err, result) => {
//         if (err) res.status(500);
//         res.json(result);
//     })
// })
// router.route('/recipe/detail').get((req, res) => {
//     recipeDao.findDetailById(req.query.req, (err, result) => {
//         if (err) res.status(500);
//         res.json(result);
//     })
// })

router.route('/recipe/:id')
    .get((req, res) => {
        recipeDao.findDetailById(req.params.id, (err, result) => {
            if (err) res.status(500);
            res.json(result);
        })
    })
    .post((req, res) => {
        recipeDao.handleRecipeFromFront(req.body, (err, result) => {
            if (err) res.status(500);
            res.json(result);
        })
    })
    .put((req, res) => {
        recipeDao.handleRecipeFromFront(req.body, (err, result) => {
            if (err) res.status(500);
            res.json(result);
        })
    })
    .delete((req, res) => {
        recipeDao.deleteById(req.params.id, (err, result) => {
            if (err) res.status(500);
            res.json(result);
        })
    })

// router.route('/recipe/modify').put((req, res) => {
//     recipeDao.handleRecipeFromFront(req.body, (err, result) => {
//         if (err) res.status(500);
//         res.json(result);
//     })
// })
// router.route('/recipe/add').post((req, res) => {
//     recipeDao.handleRecipeFromFront(req.body, (err, result) => {
//         if (err) res.status(500);
//         res.json(result);
//     })
// })
// router.route('/recipe/delete').get((req, res) => {
//     recipeDao.deleteById(req.query.req, (err, result) => {
//         if (err) res.status(500);
//         res.json(result);
//     })
// })

router.route('/recipe/new').get((req, res) => {
    recipeDao.createNewRecipe((err, result) => {
        if (err) res.status(500);
        res.json(result);
    })
})
router.route('/storage/check').get((req, res) => {
    recipeDao.checkStorage((err, result) => {
        if (err) res.status(500);
        res.json(result);
    })
})

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
    // res.render('error');
});

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});