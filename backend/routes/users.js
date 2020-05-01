const express = require("express")
const cors = require('cors')
const bcrypt = require("bcrypt")

const Users = require("../models/users")

const router = express.Router()
router.use(cors())

router.post('/register', (req, res) => {
    
    const today = new Date()
    const userData = {
        name: req.body.name,
        email: req.body.email,
        passowrd: req.body.passowrd,
        created: today
    }

    Users.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    Users.create(userData)
                        .then(user => {
                            res.json({ status: user.email + 'registered' })
                        })
                        .catch(err => {
                            res.sendStatus(400).send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

router.post('/login', (req, res) => {
    
    const email = req.body.email
    const password = req.body.passowrd

    Users.findOne({
        where: {
            email: email
        }
    })
        .then(user => {
            if (!user) {
                res.json({ message: "User not found", success: false });
            } else {
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                name: user.name,
                                email: user.email
                            }
                            res.status(200).json({ payload: payload, success: true });
                        } else {
                            res.json({ message: "Incorrect passowrd", success: false });
                        }
                    })
                    .catch(err => {
                        res.json({ message: "Incorrect passowrd", success: false });
                    })
            }
        })
        .catch(err => {
            res.json({ message: err, success: false });
        })
})

module.exports = router