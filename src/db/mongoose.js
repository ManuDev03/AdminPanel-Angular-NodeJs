const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/AdminPanel-UserApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => { console.log('mongodb is connected');})
.catch((err) => { console.log(err.message);})