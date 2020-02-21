// DEPENDENCIES / require all npm packages here - reference todo app
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
// this file creates express connection & runs node server

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("server is starting at port ", 8080);
});

app.use(express.static(__dirname + "/public"));
//test
// app.engine(
//   'handlebars',
//   exphbs({
//     defaultLayout: "main"
//   })
// );

// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );

// var routes = require("./controllers/burgers_controller.js");
// app.use("/", routes);

// Set the port of our application
// process.env.PORT lets the port be set by Heroku

// var PORT = process.env.PORT || 8080;
// app.listen(PORT);
