document.getElementById('main').innerHTML = 'Main div content';

const socket = new WebSocket('ws://localhost:8081/api/ws');

socket.addEventListener('open', function (event) {
  socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
  document.getElementById('main').innerHTML = event.data;
});