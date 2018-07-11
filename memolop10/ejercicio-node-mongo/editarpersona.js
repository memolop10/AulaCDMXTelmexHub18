let express = require("express")
let bodyParser = require("body-parser")
let app = express()

let controller = require('./controller')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get recibe 2 parametros, un string que es el url 
// y un handler cuando se accesa a ese string

app.get('/', function (id) {

    response.send('Editado')
})

response.send(objJson)

