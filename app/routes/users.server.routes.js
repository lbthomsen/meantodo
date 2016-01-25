var users = require('../../app/controllers/users.server.controller')
    passport = require('passport');

module.exports = function(app) {

    app.route('/users')
        .post(users.requiresLogin, users.create)
        .get(users.requiresLogin, users.list);

    app.route('/users/:userId')
        .get(users.requiresLogin, users.read)
        .put(users.requiresLogin, users.update)
        .delete(users.requiresLogin, users.delete);

    app.param('userId', users.userByID);

    app.route('/register')
        .get(users.renderRegister)
        .post(users.register);

    app.route('/login') 
        .get(users.renderLogin)
        .post(passport.authenticate('local', {
            successRedirect: '/', 
            failureRedirect: '/login', 
            failureFlash: true
        }));

    app.get('/logout', users.logout);

    app.get('/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/login',
        scope:['email']
    }));

    app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/login',
        successRedirect: '/',
        scope:['email']
    }));

};

/* 
 * vim: ts=4 et autoindent nowrap
 */
