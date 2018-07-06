var express = require('express')
var app = express()
var port = 3000;

// view engine setup
app.set('view engine', 'ejs');

// declare static file directory
app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.send('Hello World - express node js')
// })
 
app.listen(port,, function(){
  console.log('Node js Express js Tutorial');
});