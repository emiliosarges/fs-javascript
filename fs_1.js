const fs = require('fs');

//Ler arquivo => fs.readFile("nome_do_arquivo.txt", "uft-8", fn)

fs.readFile("estudar-programacao.txt", "utf-8", (erro, conteudo) => {
    if (erro) {
        console.log('Erro ao ler o arquivo:', erro);
        return;
    }
    console.log(conteudo);
});

