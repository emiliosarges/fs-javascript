const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, 'notas');

fs.readdir(caminho, (erro, arquivos) => {
  if (erro) {
    console.log("Erro ao tentar ler arquivos:", erro.message);
    return;
  }
  console.log("Lista de arquivos: ", arquivos[0], arquivos[1], arquivos[2]);
});

const caminhoNota1 = path.join(__dirname, 'notas', 'nota3.txt')

fs.readFile(caminhoNota1, 'utf-8', (erro, conteudo) => {
  if (erro) {
    console.log('Algo deu errado: ', erro.message)
    return;
  }
  console.log('O conteúdo do arquivo é: ', conteudo);
  
})