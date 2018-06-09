// var path = require('path');
//
// app.use(express.static (path.join(__dirname, 'public')));
//
// app.use('/', index);
//
// app.set('views', path.join(__dirname,'./server/views/'));
// app.set('view options', {layout: false});
//
// app.get('*', index);
//

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});


module.exports = app;
