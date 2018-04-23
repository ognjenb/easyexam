var express = require('express');
var app = express();
var expressWs = require('express-ws')(app).app;

const PORT = 8080;

app.get('/api', function(req, res, next){
  res.end();
});

app.ws('/api/ws', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send(`Server received message ${msg}`);
  });

  let question = "How far away is Sun from Earth?"
  let answers = [
    {
      rightAnswer: false,
      answer: "5 km"
    },
    {
      rightAnswer: false,
      answer: "200000 km"
    },
    {
      rightAnswer: true,
      answer: "150000000 km"
    },
    {
      rightAnswer: false,
      answer: "240000000 km"
    }
  ];

  let response = {
    question, answers
  }

  setTimeout(() => ws.send(JSON.stringify(response)), 2000)

  next();
});

app.listen(PORT);
