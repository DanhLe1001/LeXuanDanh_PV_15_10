const searchRoute = require('./search');

function route(app) {
    // app.use('/abc', newRoute);

    app.use('/', searchRoute);
}

module.exports = route;
