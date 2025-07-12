# 📘 Mini Curso Node.js: Trabalhando com `fs` e `path` (Para Iniciantes)

Este é um mini curso completo e didático para iniciantes aprenderem a usar os módulos `fs` e `path` do Node.js para manipular arquivos e pastas.

---

## 📦 Módulo 0: Preparação

- Instale o Node.js: https://nodejs.org/
- Use um editor como o VS Code
- Crie uma pasta: `meu-curso-fs`
- Crie um arquivo: `index.js`

---

## 📁 Módulo 1: O que são os módulos `fs` e `path`

- `fs`: manipula arquivos e pastas
- `path`: monta caminhos seguros

Importação:

```js
const fs = require("fs");
const path = require("path");
```

---

## 📘 Módulo 2: Lendo um arquivo

1. Crie `mensagem.txt` com algum texto
2. Código:

```js
fs.readFile("mensagem.txt", "utf8", (erro, conteudo) => {
  if (erro) {
    console.log("Erro:", erro);
    return;
  }
  console.log("Conteúdo:", conteudo);
});
```

🧩 **Desafio 1**: Crie `poema.txt` e leia seu conteúdo

---

## ✍️ Módulo 3: Criando arquivos

```js
fs.writeFile("novoArquivo.txt", "Conteúdo", (erro) => {
  if (erro) {
    console.log("Erro:", erro);
    return;
  }
  console.log("Arquivo criado!");
});
```

🧩 **Desafio 2**: Crie `boasvindas.txt` com o texto: "Seja bem-vindo ao mundo do Node.js!"

---

## ➕ Módulo 4: Adicionando conteúdo

```js
fs.appendFile("novoArquivo.txt", "\nNova linha!", (erro) => {
  if (erro) {
    console.log("Erro:", erro);
    return;
  }
  console.log("Conteúdo adicionado!");
});
```

🧩 **Desafio 3**: Adicione uma frase ao final de `boasvindas.txt`

---

## 🧹 Módulo 5: Deletando arquivos

```js
fs.unlink("arquivoParaDeletar.txt", (erro) => {
  if (erro) {
    console.log("Erro:", erro);
    return;
  }
  console.log("Arquivo deletado!");
});
```

🧩 **Desafio 4**: Crie `temporario.txt` e depois delete-o

---

## 📂 Módulo 6: Criando e listando pastas

Criar pasta:

```js
fs.mkdir("minhaPasta", (erro) => {
  if (erro) console.log("Erro:", erro);
  else console.log("Pasta criada!");
});
```

Listar arquivos da pasta atual:

```js
fs.readdir(".", (erro, arquivos) => {
  if (erro) {
    console.log("Erro:", erro);
    return;
  }
  console.log("Arquivos:", arquivos);
});
```

🧩 **Desafio 5**:
- Crie a pasta `notas`
- Crie os arquivos `nota1.txt`, `nota2.txt`, `nota3.txt`
- Liste os arquivos da pasta

---

## 🧭 Módulo 7: Usando `path`

```js
const caminho = path.join(__dirname, "mensagem.txt");

fs.readFile(caminho, "utf8", (erro, conteudo) => {
  if (erro) throw erro;
  console.log("Conteúdo:", conteudo);
});
```

🔎 `__dirname` mostra o caminho completo da pasta onde está seu arquivo `.js`.

🧩 **Desafio 6**: Use `path.join(__dirname, "poema.txt")` para ler o arquivo `poema.txt`

---

## ✅ Conclusão

Você aprendeu a:
- Ler, escrever, editar e apagar arquivos
- Criar e listar pastas
- Montar caminhos seguros com `path`

Parabéns por concluir o mini curso! 🎉
