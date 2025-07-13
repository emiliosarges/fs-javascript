const fs = require('fs')

//Criar diretorio => fs.appendFile("nome_da_pasta", fn)

fs.mkdir('notas', erro => {
    if (erro) {
        console.log('Erro ao criar pasta:', erro);
        return;
    }
    console.log('Pasta criada com sucesso!');
})