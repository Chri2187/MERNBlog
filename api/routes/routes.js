const express = require('express')
const router = express.Router()

// Add routes
// register
router.route('/register').post((req, res) => {
    console.log(req.body);
    res.send('test')
})
module.exports = router;
