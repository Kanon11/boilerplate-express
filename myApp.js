let express = require('express');
let app = express();
app.use('/public', express.static(__dirname + '/public'));
require('dotenv').config()

app.use((req,res,next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
})



app.get("/",(req, res) => {
    res.sendFile(__dirname +'/views/index.html')
})
app.get("/json", (req, res) => {
    res.json({ message: process.env.MESSAGE_STYLE === 'uppercase' ? "Hello json".toUpperCase() : "Hello json" });
})
app.get('/now', (req, res, next) => { 
    req.time = new Date().toString();
    next();
}, (req, res) => {
    return res.send({ time: req.time });
})




































 module.exports = app;
