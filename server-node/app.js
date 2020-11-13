  

var express = require('express');
var app = express(); 
const path = require('path');


app.get('/api/index', function(req,res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
 
});

app.get('/api/lotta', function(req,res) {
  res.sendFile(path.join(__dirname, 'public/lotta.html'));
 
});
app.get('/api/team',function(req,res){
 res.sendFile(path.join(__dirname,'team.json'));
});
app.listen(3000, function () {
     console.log('Example app listening on port 3000!');
});
