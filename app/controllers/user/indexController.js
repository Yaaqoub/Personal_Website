var exports = module.exports = {};

exports.index = function(req, res) {

    res.render('user/index', {
        user_isIndex: true
    });
};