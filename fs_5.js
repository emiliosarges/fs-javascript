const fs = require("fs");

fs.unlink("arquivolixo.txt", (erro) => {
  if (erro) {
    console.log("Erro ao deletar: ", erro);
    return;
  }
  console.log("Arquivo deletado!");
});
