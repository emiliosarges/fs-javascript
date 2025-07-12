const fs = require('fs')

fs.unlink('temporario.txt', erro => {
    if(erro) {
        console.log('Erro ao deletar o arquivo: ', erro);
        return;
    }
    console.log('Arquivo deletado com sucesso!');
})