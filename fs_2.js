const fs = require("fs");

fs.readFile("poema.txt", "utf-8", (erro, conteudo) => {
  if (erro) {
    console.log(`Erro ${erro} foi encontrado.
            Tente novamente mais tarde`);
    return;
  }
  console.log(conteudo);
});
