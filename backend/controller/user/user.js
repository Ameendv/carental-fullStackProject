const bcrypt = require('bcrypt')
const User = require('../../models/userModel')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)
const jwt = require('jsonwebtoken')

module.exports = {
    userSignup: async (req, res) => {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashedPassword;
        req.body.confirmPassword = null

        try {

            const response = await user.create(req.body)

            console.log(response)

        } catch (error) {
            console.log(error)

        }

    },
    googleSignin: async (req, res) => {

        console.log('heyyyya')
        const { token } = req.body
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
        console.log(ticket)
        const { name, email, picture } = ticket.getPayload()

        try {
            const user = await User.findOne({ email: email })

            if (user) {
                const user = { username: email }

                const accessToken = generateAccessToken(user)

                const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" })

                const response = await User.updateOne({ email: email }, { $push: { refreshToken: refreshToken } })
                console.log(response)
                return res.status(200).send({ name, email, picture });
            } else {
                const res = await User.create({ name: name, email: email, profilePicture: picture, emailVerified: true })
                const user = { username: email }

                const accessToken = generateAccessToken(user)

                const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" })

                const response = await User.updateOne({ email: email }, { $push: { refreshToken: refreshToken } })
                console.log(response)

                return res.status(200).send({ name, email, picture });
            }
        } catch (error) {
            res.sendStatus(500).json('Something happened,try again later')
        }



    },
    userSignin: async (req, res) => {

        try {

            const user = await User.findOne({ email: req.body.email })
            if (!user) {
                return res.sendStatus(404).send('User not found')

            }

            if (await bcrypt.compare(req.body.password, user.password)) {
                const user = { username: req.body.email }

                const accessToken = generateAccessToken(user)

                const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1d" })

                const response = await User.updateOne({ email: req.body.email }, { $push: { refreshToken: refreshToken } })
                console.log(response)

                res.json({ accessToken, refreshToken })
            } else {
                res.sendStatus(404)
            }

        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }

    }
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })
}