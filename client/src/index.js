document.getElementById('main').innerHTML = 'Main div content';

const socket = new WebSocket('ws://localhost:8081/api/ws');

socket.addEventListener('open', function (event) {
  socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
  var obj = JSON.parse(event.data);
  let mainDiv = document.getElementById('main');
  mainDiv.innerHTML = getAnswerHTML(obj.question);
  mainDiv.innerHTML += obj.answers.map((answers) => getAnswerHTML(answers.answer)).join('');
});

function getAnswerHTML(text){
  return `<div  style="width:fit-content" class="list-group-item list-group-item-primary">${text}</div>`;
}