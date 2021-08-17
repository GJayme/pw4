var express = require("express");

var app = express();

app.get("/", trataGet);

function trataGet(req, res) {
  res.send("Bem vindo ao Express!");
}

app.post("/", function (req, res) {
  res.json({
    mensagem: "Bem vindo ao Express via POST",
  });
});

app.use("/ifsp", express.static("estatico"));

app.listen(80, function () {
  console.log("Bem vindo ao Express (porta 80)");
});
