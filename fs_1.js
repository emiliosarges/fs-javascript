const fs = require('fs');

fs.readFile("carta_do_trump.txt", "utf-8", (erro, conteudo) => {
    if (erro) {
        console.log('Erro ao ler o arquivo:', erro);
        return;
    }
    console.log(conteudo);
});

