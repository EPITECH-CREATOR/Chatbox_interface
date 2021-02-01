const { check, validationResult}
 = require('express-validator');

const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname))
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public/'));


app.get('/', (req, res) => {
  res.render("index");
})

app.get('/inscription', (req, res) => {
  res.render("inscription")
})

app.post('/inscription', [
  check('UserEmail', 'Email invalid').isEmail(),
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.json(errors)
  }
  else {
    res.send("Successfully validated")
  }
});

app.listen(2000, function (err) {
  if (err) throw err;
  console.log("Server successfully initialized");
})
