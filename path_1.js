const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "textoslegais", "aprendasobrevue.txt");

fs.readFile(caminho, "utf-8", (erro, arquivo) => {
  if (erro) throw erro;
  console.log("O conteúdo desse arquvio é: ", arquivo);
});
