const fs = require('fs')

fs.writeFile("boasvindas.txt", "Seja bem vindo ao mundo do Node.js", erro => {
    if (erro) {
        console.log('Erro ao escrever arquivo:', erro);
        return;
    }

    console.log('Arquivo criado com sucesso!');
    
})