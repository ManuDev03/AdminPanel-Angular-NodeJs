const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const morganLogger = require('./middleware/logger')

//configuration
dotenv.config({path:path.resolve(process.cwd(),"src/config/.env")})
const port = process.env.PORT || 3000

//middleware
app.use(morganLogger)
app.use(express.json())

app.post('/api/users', (req, res) => {
    res.status(200).json({message: "user is added to records"})
})
app.get('/api/users', (req, res) => {
    res.status(200).json({message: "All users from records"})
})
app.get('/api/users/:id', (req, res) => {
    res.status(200).json({message: "individual user record"})
})
app.put('/api/users/:id', (req, res) => {
    res.status(200).json({message: "update individual user in the record"})
})
app.delete('/api/users/:id', (req, res) => {
    res.status(200).json({message: "delete individual user in the record"})
})
app.listen(port, () => {
    console.log('server is runing on port' + port);
})