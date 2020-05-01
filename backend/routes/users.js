const express = require("express")
const cors = require('cors')

const Users = require("../models/users")

const router = express.Router()
router.use(cors())

router.post('/register', (req, res) => {
    
    const today = new Date()
    let userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    Users.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user === null || !user) {
                    Users.create(userData)
                        .then(newUser => {
                            return res.json({ status: userData.email + 'registered', success: true })
                        })
                        .catch(err => {
                            res.json({error: err, success: false})
                        })
            } else {
                res.sendStatus(400).json({ error: "User already exists", success: false })
            }
        })
        .catch(err => {
            res.sendStatus(400).json({error: err, success: false})
        })
})

router.post('/login', (req, res) => {
    
    const email = req.body.email
    const password = req.body.password

    Users.findOne({
        where: {
            email: email
        }
    })
        .then(user => {
            if (!user) {
                res.json({ message: "User not found", success: false });
            } else {
                    if(password === user.password) {
                        const payload = {
                            name: user.name,
                            email: user.email
                        }
                        res.status(200).json({ payload: payload, success: true });
                    } else {
                        console.log(err)
                        res.json({ message: "Incorrect password", success: false });
                    }
            }
        })
        .catch(err => {
            res.json({ message: err, success: false });
        })
})

module.exports = router