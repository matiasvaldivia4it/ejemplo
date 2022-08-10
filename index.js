const express = require('express');
 const app = express();
 const PORT = 3000;
 app.get('/', function(req, res) {
 	res.json({"hello": "express with mongo inside a container 2"});
 });
 app.listen(PORT, function(){
   console.log('Your node js server is running on PORT:',PORT);
 });
