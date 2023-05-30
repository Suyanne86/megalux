const express = require ('express')
const app = express()

//http://localhost:3000/tabela?linhas=10&colunas=9  altere na propria url para alterar o numero de colunas 
app.get('/tabela', function(req, next, resp ){ // o next nesse caso tem como função chamar a proxima tarefa que precisa ser executada 
    req.tabela = {
        linhas: parseInt(req.query.linhas),
        colunas: parseInt(req.query.colunas)}
    next()
})
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

app.listen(3000, () => console.log('Iniciou.....'));