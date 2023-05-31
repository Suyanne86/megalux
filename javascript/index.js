// Arquivo para a criação da primeira API em node

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json()) 
app.use(cors())

let db = [
    {'1': {Nome: 'Rony Weasley', Casa: 'Grifinória' }},
    {'2': {Nome: 'Luna Lovegood', Casa: 'Lunfa-Lunfa' }},
    {'3': {Nome: 'Draco Malfoy', Casa: 'Sonserina' }}
]

app.get('/personagens', (req, res)  =>{
    return res.json(db)
} )



app.listen(3000, () => {
    console.log(`Express started in https://localhost:3000`)
})