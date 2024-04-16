const express = require('express');
 // Call express.Router as a function
const User = require('../models/User');
const router = express.Router();
//Create a User Using :POST "/api/auth". Doesn't require Auth
router.post('/', (req, res) => {
    console.log(req.body);
    const user=User(req.body);
    user.save();
    res.send(req.body);


});

module.exports = router;
