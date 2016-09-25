/**
 * Created by ritesh on 9/25/2016.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('This was created by ritesh');
});

module.exports = router;