const fs = require("fs");

//Deletar arquivo => fs.ulink("nome_do_arquivo.txt", fn)

fs.unlink("arquivolixo.txt", (erro) => {
  if (erro) {
    console.log("Erro ao deletar: ", erro);
    return;
  }
  console.log("Arquivo deletado!");
});
