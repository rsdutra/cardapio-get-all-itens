const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

var server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`));


// var server = app.listen(8081, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
//  });

app.get('/',function(req,res){
    console.log("test");
    res.end( "data teste" );
});