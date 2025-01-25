const express = require('express');
const router = express.Router();
const UserModel = require('../models/User'); // Adjust the path if needed
const changeName = require('../middleweres/userHelper');



router.post('/', (req, res) => {
    console.log(req.body);
    UserModel.create(req.body)
        .then(user =>{ 
            changeName(user.name)
            res.json(user)})
        .catch(err => res.status(500).json(err));
});

module.exports = router; // Correctly export the router
