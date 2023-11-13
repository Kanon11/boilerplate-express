let express = require('express');
let app = express();
app.use('/public', express.static(__dirname + '/public'));
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
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
app.get('/:word/echo', (req, res) => {
    return res.send({ echo: req.params.word });
})
// app.use('/name', (req, res) => {
//     return res.send({ name: `${req.query.first} ${req.query.last}` });
// })
app.route('/name').get((req, res, next) => {
    console.log("from middleware");
    next();
},(req, res) => {
    return res.send({ name: `${req.query.first} ${req.query.last}` });
}).post((req, res) => {
    return res.send({ name: `${req.query.first} ${req.query.last}` });
})


































 module.exports = app;
