
exports.render = function(req, res) {
    res.render('index', {
        title: 'MeanTodo', 
	    user: JSON.stringify(req.user)
    });
};

/*
 * vim: ts=4 et nowrap autoindent
 */
