let mongo = require('mongodb')
let client = mongo.MongoClient
let url = "mongodb://localhost:27017"
let dbName = "Telmex"


function getblog (req, res) {
    
    client.connect(url, function (err, conn) {
        if (err) console.log(err)
        let db = conn.db(dbName)
        
        db.collection('blog')
        .findOne({blog :req.params.num}, function(err, data) {
            res.render('blog')
            }
        )
    })
}



function getblogs (req, res) {
    
    client.connect(url, function (err, conn) {
        if (err) console.log(err)
        let db = conn.db(dbName)
        
        db.collection('blog')
        .find({blog :req.params.num})
        .toArray( function(err, data) {
            // let nombresPersonas = data.map(function (persona) {
            //     return persona.name
            // })
            // res.send(nombresPersonas)
            res.render('blog')
        })
    })

}


module.exports = {
   
    getblog,
    getblogs
  
}

