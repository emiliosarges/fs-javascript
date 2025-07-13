const fs = require('fs')

//Adicionar conteudo a um arquivo existente=> fs.appendFile("nome_do_arquivo_existente.txt", "\nnova linha de conteudo no arquivo existente", fn)

fs.appendFile('boasvindas.txt', '\nEssa linha foi adicionada no fs_4.js', erro => {
    if (erro) {
        console.log('Erro ao tentar adicionar conteúdo:', erro);
        return;
    }
    console.log('Conteúdo adicionado com sucesso!');
    
})