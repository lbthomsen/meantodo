var config = require('./config'),
    express = require('express'),
    passport = require('passport'),
    bodyParser = require('body-parser'), 
    flash = require('connect-flash'), 
    session = require('express-session');

module.exports = function() {
    var app = express();

    app.use(session({
        saveUninitialized: true, 
        resave: true, 
        secret: 'OutSuperSecretCookingSecret'
    }));

    app.use(flash());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(passport.initialize());
    app.use(passport.session());

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);

    app.use(express.static('./public'));

    return app;
};

/* 
 * vim: ts=4 et autoindent
 */

