'use strict';

module.exports = function(app) {
	var controller = require('../controllers/Controller');

	// controller Routes
	app.route('/v1/all')
		.get(controller.all);
};
