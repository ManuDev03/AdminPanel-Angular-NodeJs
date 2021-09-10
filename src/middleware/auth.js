const jwt = require('jsonwebtoken')
const User = require('../models/user.Models')


const auth = async (request, response, next) => {
    try {
        const token = request.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.secret)
        const user = await User.findOne({ _id: decoded.userId, 'tokens.token': token })
        console.log(token)
        console.log(decoded)
        console.log(user)
        if (!user) {
            throw new Error()
        }
        request.token = token
        request.user = user
        next()
    } catch (e) {
        response.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth