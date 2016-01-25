var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/meantodo',
    facebook: {
        clientID: '185791268444263',
        clientSecret: '042277018b4197fd2e23b45f27ab181c',
        callbackURL: 'http://ncpws04.netcompartner.com:'+ port +'/oauth/facebook/callback'
    }
};

/*
 * vim: ts=4 et nowrap autoindent
 */

