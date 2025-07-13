const fs = require('fs')

//Adicionar conteudo => fs.appendFile("nome_do_arquivo.txt", "\nnova linha conteudo", fn)

fs.appendFile('boasvindas.txt', '\nEssa linha foi adicionada no fs_4.js', erro => {
    if (erro) {
        console.log('Erro ao tentar adicionar conteúdo:', erro);
        return;
    }
    console.log('Conteúdo adicionado com sucesso!');
    
})