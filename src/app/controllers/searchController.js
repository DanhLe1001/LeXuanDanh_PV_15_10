const search = require('../model/search');

class searchController {
    show(req, res, next) {
        search.findOne({ slug: req.params.slug }).then(res.render('courses/search')).catch(next);
    }
}

module.exports = new searchController();
