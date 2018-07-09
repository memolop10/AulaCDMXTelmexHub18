let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'Telmex'

client.connect(url, function (err, con) {
    if (err) console.log(err)
    console.log('Connected successfully to server')

    const db = con.db(dbName)




    db.collection('personas')
        .find({})
        .toArray(function (err, data) {
            if (err) console.log(err)
            impresion(data)
        })
})


    function impresion(arreglo){
        let impre
        console.log(arreglo)
        for (i=0;i<arreglo.length;i++){

            console.log(arreglo[i].name + 'tiene' + arreglo[i].age + 'años' +
             'y vive con un ' + arreglo[i].pets + 'y un' + arreglo[i].pets )
          
           }
    }