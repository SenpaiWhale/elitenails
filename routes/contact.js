var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Elite Nails | Willow Park, TX' });
});

module.exports = router;
