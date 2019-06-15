const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// initializations
const app = express();
require('./database/database');
require('./passport/local-auth');

// settings
app.set('port', process.env.PORT || 3000);
/*app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs');
*/
//require('./config/config');

app.set('json spaces', 2);
// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(morgan('dev'));


app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    //app.locals.signinMessage = req.flash('signinMessage');
    //app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    console.log(app.locals)
    next();
});

// routes
app.use('/api', require('./routes/index'));
app.use('/api/user', require('./routes/users'));
app.use('/api/teachers', require('./routes/teachers'));
app.use('/api/languages', require('./routes/languages') );


// Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});