document.getElementById('main').innerHTML = 'Main div content';

const socket = new WebSocket('ws://localhost:8081/api/ws');

socket.addEventListener('open', function (event) {
  socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
  var obj = JSON.parse(event.data);
  let mainDiv = document.getElementById('main');
  appendTextDiv(mainDiv,obj.question);
  obj.answers.forEach((answers) => appendTextDiv(mainDiv, answers.answer));
});

function appendTextDiv(parent,text){
  var div = document.createElement('div');
  div.innerHTML=text;
  parent.appendChild(div);
}