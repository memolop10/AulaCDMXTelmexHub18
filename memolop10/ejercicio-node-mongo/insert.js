let mongo = require ("mongodb")
let client = mongo.MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'Telmex'

client.connect(url, function (err , con) {
    if (err) console.log(err)
    console.log('ya me conecte')

    const db = con.db(dbName)

    db.collection('personas').insert([{
       name: 'Mariel',
       apellido: 'garcia',
       age: '54',
       pets:["gato","rata"]

    }, {
        name: 'Benito',
        apellido: 'bodoque',
        age: '18',
        pets:["gato","perro"]
 
     },{
        name: 'matute',
        apellido: 'elpoli',
        age: '10',
       pets:["gato","caballo"]
 
     },{
        name: 'goku',
        apellido: 'lopez',
        age: '34',
       pets:["gato","gallo"]
 
     },{
        name: 'demostenes',
        apellido: 'fernandez',
        age: '54',
       pets:["pato","grillo"]
 
     }],function (error, data){
        console.log(data)
    })
}
)