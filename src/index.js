const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/index');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const db = require('./congfig/db');
db.connect();
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
// app.engine("handlebars", engine());
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//route
routes(app);

app.listen(port);
