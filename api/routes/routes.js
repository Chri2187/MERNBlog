const express = require('express')
const router = express.Router()

// Add routes
// register
router.route('/register').post((req, res) => {
    const { username, password } = req.body
    res.json({ requestData: { username, password } })
})
module.exports = router;
