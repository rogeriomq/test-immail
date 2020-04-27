const db = require('mongoose')

try {
  db.connect( 
    'mongodb://root:example@localhost:27017/immaildb',
    {
      auth: { authSource: 'admin'},
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )  
} catch(error) {
  console.log(error)
}


module.exports = db