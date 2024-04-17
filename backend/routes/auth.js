// const express = require('express');
//  // Call express.Router as a function
// const User = require('../models/User');
// const router = express.Router();
// const { body, validationResult } = require('express-validator');

// //Create a User Using :POST "/api/auth". Doesn't require Auth
// router.post('/',[
//     body('name','Enter a valid name').isLength({min: 3 }),
//     body('email','Enter a valid email').isEmail(),
//     body('password','Password must be at least 5 character').isLength({min: 5 }),
//       ], (req, res) => {
//   const errors=validationResult(req);
//   if(!errors.isEmpty()){
//     return res.status(400).json({errors:errors.array() });
//   }
//   User.create({
//     name:req.body.name,
//     email: req.body.email,
//     password:req.body.password
//   }).then(user =>res.json(user));

//     res.send(req.body);


// });

// module.exports = router;


const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(user => {
    // Send the created user as JSON
    res.json(user);

    // Optionally, send the request body back as well
    // res.send(req.body);
  }).catch(err => {
    // Handle any errors that occur during user creation
    console.error(err);
    res.status(500).send('Server Error');
  });
});

module.exports = router;
