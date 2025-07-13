const fs = require('fs')

fs.readdir('.', (erro, arquivos) => {
    if (erro) {
        console.log('Erro ao listar arquivos do diretório');
        return;
    }
    console.log('Arquivos da pasta atual: ', arquivos)
    
})