var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Bonjour Corinne, ceci est un test de votre doudou préféré !! :D Bonne journée à vous et reposez vous bien !!!');  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});