const User = require('../models/User')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = bcryptjs.genSaltSync(10)

const register = async (req, res) => {
    const { username, password } = req.body
    try {
        const ris = await User.create({
            username,
            password: bcryptjs.hashSync(password, salt)
        })
        console.log(ris);
        res.json(ris)
    } catch (e) {
        res.status(400).json({
            msg: 'Utente gia registrato'
        })
    }
}

const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const ris = await User.findOne({ username: username })
        const passOK = bcryptjs.compareSync(password, ris.password)
        if (passOK) {
            // logged in
            jwt.sign({ username, id: ris._id }, process.env.JWT_KEY, {}, (err, token) => {
                if (err) throw err
                res.json({ jwt: token, user: ris.username })
            });
        } else {
            // NOT logged in
            res.status(401).json('Wrong Credentials')
        }
    } catch (err) {
        res.status(400).json(err.message)
    }
}

const profile = (req, res) => {
    const token = req.body
    const decoded = jwt.verify(req.body.jwt, process.env.JWT_KEY);
    res.json(decoded)
}
module.exports = { register, login, profile }