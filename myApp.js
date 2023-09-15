require('dotenv').config()
let express = require('express');
let app = express();

// app.get('/', function (req, res){
//     res.send("Hello Express")
// })

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html')
})

app.use('/public', express.static(__dirname + '/public'))


app.get('/json', function(req, res){
let response = 'Hello json'
    if(process.env.MESSAGE_STYLE == "uppercase"){
        let response = "Hello json".toUpperCase()
    }else {
        let response = "Hello json"
    }
    res.json({"message": response})
})


































 module.exports = app;
