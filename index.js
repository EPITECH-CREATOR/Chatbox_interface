const { check, validationResult}
 = require('express-validator');

const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()
var requiredMessage = "Le champ ne doit pas etre vide"

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
  check('UserNom').notEmpty().withMessage(requiredMessage),
  check('UserEmail').notEmpty().withMessage(requiredMessage)
  .isEmail().withMessage("Email invalid"),
  check('UserPrenom').notEmpty().withMessage(requiredMessage),
  check('UserAge').notEmpty().withMessage(requiredMessage)
  .matches(/^[0-9]/).withMessage("Age invalid"),
  check('UserPassword').notEmpty().withMessage(requiredMessage)
  .isLength({min: 8}).withMessage("Le mot de passe doit contenir au moins 8 caractères, un 1 nombre et une lettre")
  .matches(/\S*(\S*([a-zA-Z]\S*[0-9])|([0-9]\S*[a-zA-Z]))\S*/)
  .withMessage("Le mot de passe doit contenir au moins 1 nombre et un caractère special"),
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
