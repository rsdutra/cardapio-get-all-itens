var express = require("express");
var app = express();
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 });

app.get('/',function(req,res){
    console.log("teste");
    res.end( "data" );
});