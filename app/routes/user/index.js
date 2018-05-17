let indexController = require('../../controllers/user/indexController');

module.exports = function(app) {

    /**
     * (GET Method)
     */
    app.get('/', indexController.index);

};