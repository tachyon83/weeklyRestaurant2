require("dotenv").config();
const http = require("http");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
// important: this [cors] must come before Router
const router = express.Router();
const app = express();

const auth = require("./utils/auth");
const timeStampMiddleware = require("./utils/timestamp");
const webSettings = require("./configs/webSettings");
const serveFood = require("./models/utils/serveSchedule");
serveFood();

app.use(morgan("short"));
app.use(express.json());
app.use(session(webSettings.sessionSettings));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(webSettings.corsSettings));
app.set("port", process.env.PORT || 3002);

app.use(timeStampMiddleware);
app.use("/member", require("./routes/member"));
app.use("/recipe", require("./routes/recipe"));
app.use("/plan", require("./routes/plan"));
app.use("/inventory", auth, require("./routes/inventory"));

// 404
app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  console.log();
  console.log("reached the end...");
  console.log();
  // res.render('error');
});

app.use("/", router);
const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("http://localhost:%d", app.get("port"));
  console.log();
});
