const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
let dbConnector = require("./dbConnector");

dbConnector.testConnection().then(function (e) {
  console.log("conectado:" + e);
});

const port = 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json("Hello");
});*/

app.post("https://api.spoonacular.com/users/connect", (req, res) => {
  var { user: username, pass: spoonacularPassword } = req.query;
  res.json({
    users: `${username} ${spoonacularPassword}`,
  });
});

app.post("/users", async (req, res) => {
  let data = await dbConnector.findData("users", {
    email: req.body.email,
    password: req.body.password,
  });
  res.send(data);
});

app.listen(port, () => {
  console.log(`Your app is listening on port http://localhost:${port}`);
});
