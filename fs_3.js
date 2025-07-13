const fs = require('fs')

//Criar um arquivo e seu conteúdo => fs.readFile("nome_do_arquivo_novo.txt", "conteúdo do arquivo novo", fn)

fs.writeFile("boasvindas.txt", "Seja bem vindo ao mundo do Node.js", erro => {
    if (erro) {
        console.log('Erro ao escrever arquivo:', erro);
        return;
    }

    console.log('Arquivo novo criado com sucesso!');
    
})