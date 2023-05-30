<h1 align="center"> MegaLux</h1>

<p align=center>Esse Readme tem como objetivo mostrar os pontos de dificuldade encontrados ao longo do projeto MegaLux que vão desde passo a passo de como realizar um procedimento ate descrever oque cada arquivo representa</p>

<h4 align="center"> 
	🚧  Em construção...  🚧
</h4>

### Pré-requisitos para clonar o git
antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Como compartilhar repositorio com o GitHub
 Pegar a url do tipo HTTPS no site da Github
 Abrir o VScode, abrir o terminal, selecionar o terminal do tipo Git Bash

``` 
$ git init 
$ git add . 
$ git commit -m "nome do arquivo"
$ git branch -M main 
$ git remote add origin (junto com o link do repositório) 
$ git push -u origin main 
```

### Para mandar as atualização para o GitHub siga as seguintes etapas
```
$ git status 
$ git add . 
$ git commit -m "mensagem do commit"
$ git push origin main
```

<h2>🚀 API</h2>
<p>As API's possuem um mecanismo chamado middleware que servem para fazer a chamada de outras tarefas/funções. Dentro de cada Middleware e preciso especificar as chamadas que serão realizadas dentro de um função que normalmente serão retornadas como ```req,resp,next``` veja um exemplo para ter uma base de como ele funciona </p>

```
app.get('/tabela', function(req, resp, next ){  
   console.log('Primeiro eu passo por aqui....')
	next()
})
app.get('/tabela', function(req, resp, next ){  
   console.log('Depois eu passo por aqui....')
	next()
})
app.get('/tabela', function(req, resp, next ){  
   resp.send('Essa e minha resposta final....')
})
```
<p>Tenha em mente que *req* será a requisição a ser feita, *next* será para passar para o próximo bloco de comando,*resp* será a resposta ao final do percuso do middlehare. Veja no bloco a seguir um exemplo simples de middleware que faz uso de uma function em seu bloco de comando </p>

```
app.get('/tabela', function(req, resp){ 
    let num = 1
    let tabela = '<table border = 1>'

    for (let l = 0; l < req.tabela.linhas; l++) {
        tabela += '<tr>'
        for (let c = 0; c < req.tabela.colunas; c++) {
            tabela += `<td>${num}</td>`
            num ++
        }
        tabela += '</tr>'
        
    }
    tabela += '</table>'
    resp.send(tabela)
})
```









🚀 







































### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)