var http = require("http");
const porta = 80;

http.createServer(trataRequest).listen(porta, "127.0.0.1");

console.log(`Servidor esperando por conexões na porta ${porta}`);

function trataRequest(request, response) {
  console.log("Requisição atendida");
  // const limite = 10000;

  // for (x = 0; x < limite; x++) {
  //   for (y = 0; y < limite; y++) {
  //     z = x * y;
  //   }
  // }
  response.writeHead(200, { "Content-type": "text/plain" });
  response.end("Bem vindo ao node com http");
}
