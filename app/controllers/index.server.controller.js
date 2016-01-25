
exports.render = function(req, res) {
    res.render('index', {
        title: 'MeanTodo', 
	    user: req.user ? req.user.username : ''
    });
};

/*
 * vim: ts=4 et nowrap autoindent
 */
