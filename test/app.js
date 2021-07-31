var express = require('express'); // 설치한 express module을 불러와서 변수에 담기
var app = express(); // express를 실행하여 app object 초기화

app.get('/', function(req, res) { // '/' 위치에 'get' 요청을 받는 경우,
res.send('Hello World!'); // "Hello World!"를 보냄
});

var port = 3000; // 사용할 포트 번호를 port 변수에 넣기
app.listen(port, function(){ // port 변수를 이용하여 3000번 포트에 node.js 서버를 연결
console.log('server on! http://localhost:'+port); // 서버가 실행되면 콘솔창에 표시될 메시지
});