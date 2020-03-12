// DEPENDENCIES (npm packages) / requires to give our server useful functionality
// ==============================================================================
// this file creates express connection & runs node server

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models");
require("dotenv").config();
// const dotenv = require('dotenv').config()

const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/trips", async (req, res) => {
  const trips = await db.Trip.findAll();
  console.log("[DEBUG] /trips :: ", trips);
  res.render("tripList", {
    trips: trips
  });
});

app.get("/trips/:id", async (req, res) => {
  const trip = await db.Trip.findByPk(req.params.id);
  console.log("[DEBUG] /trips/:id :: ", trip);
  res.render("tripDetail", { trip: trip });
});
// below gets data from form.handlebars
app.get("/sign-up", (req, res) => {
  res.render("form");
});
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/admin", (req, res) => {
  res.render("adminlogin");
});
app.get("/admin/events", async (req, res) => {
  const trips = await db.Trip.findAll();
  res.render("admin", {
    trips: trips
  });
});
app.get("/add-trips", (req, res) => {
  res.render("trips");
});

app.use(require("./routes"));

db.sequelize.sync();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  if (process.env.PORT) {
    console.log(
      `[START] server started successfully on port ${process.env.PORT}`
    );
  } else {
    console.log(`[START] server started successfully at http://localhost:8080`);
  }
});
