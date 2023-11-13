let express = require('express');
let app = express();
app.use('/public', express.static(__dirname + '/public'));
require('dotenv').config()





app.get("/",(req, res) => {
    res.sendFile(__dirname +'/views/index.html')
})
app.get("/json", (req, res) => {
    res.json({ message: process.env.MESSAGE_STYLE === 'uppercase' ? "Hello json".toUpperCase() : "Hello json" });
})





































 module.exports = app;
