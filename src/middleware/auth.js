const jwt = require('jsonwebtoken')


const auth = async (req, res, next) => {

    // try{
    const token = req.headers.authorization.replace('Bearer', '')
    const decoded = jwt.verify(token,process.env.secret)
    console.log(decoded)
    console.log(token)
    console.log(process.env.secret)
    next()
    // }

// catch(err)
// {
//     res.status(401).send({error: 'please authenticate'}) 
// }
// next()
}
module.exports = auth